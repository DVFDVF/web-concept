import { queryUserBrief } from '@/api/fetcher';
import { UserBriefRespItem } from '@/api/protocol';

interface UserInfoEntity {
  waiter?: Promise<UserBriefRespItem | undefined>;
  user?: UserBriefRespItem;
  loading: boolean;
}

class UserManager {
  private map: Record<number, UserInfoEntity | undefined> = {};

  getUser(userId: number) {
    let entity = this.map[userId];
    if (entity?.user) return Promise.resolve(entity.user);
    if (entity?.loading) {
      return entity.waiter!;
    }
    entity = {
      loading: true,
      waiter: queryUserBrief([userId])
        .then((users) => {
          if (users.length) {
            const user = users[0];
            entity!.user = user;
            return user;
          }
          return undefined;
        })
        .finally(() => {
          entity!.loading = false;
        }),
    };
    this.map[userId] = entity;
    return entity.waiter!;
  }
  getUsers(userIds: number[]) {
    if (userIds.length < 1) return Promise.resolve([]);
    const temp: Promise<UserBriefRespItem | undefined>[] = [];
    const waits: number[] = [];
    userIds.forEach((userId) => {
      const entity = this.map[userId];
      if (entity?.user) {
        temp.push(Promise.resolve(entity.user));
      } else if (entity?.loading) {
        temp.push(entity.waiter!);
      } else {
        waits.push(userId);
      }
    });
    if (waits.length > 0) {
      const query = queryUserBrief(Array.from(new Set(waits)));
      waits.forEach((userId) => {
        const entity: UserInfoEntity = {
          loading: true,
          waiter: query
            .then((users) => {
              const user = users.find((user) => user.id === userId);
              entity.user = user;
              return user;
            })
            .finally(() => {
              entity.loading = false;
            }),
        };
        temp.push(entity.waiter!);
      });
    }

    return Promise.all(temp);
  }
}

export default new UserManager();
