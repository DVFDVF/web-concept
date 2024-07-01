import { tokenController } from '@/manager/token';
import { get, post } from '.';
import {
  AUTO_LOGIN,
  AutoLoginResp,
  USER_BRIEF,
  UserBriefReq,
  UserBriefRespItem,
  WEB_CONFIG,
  WebConfigResp,
  MessageResp,
  STATION_MESSAGE,
} from './protocol';

export async function autoLogin() {
  const freshToken = tokenController.freshToken;
  if (freshToken) {
    return post<AutoLoginResp, { freshToken: string }>(AUTO_LOGIN, {
      freshToken,
    });
  }
  return undefined;
}

export async function webConfig() {
  try {
    return await get<WebConfigResp>(WEB_CONFIG);
  } catch (error) {
    console.log('站点配置请求失败');
  }
}

/**
 * 查询用户的简单信息
 */
export async function queryUserBrief(userIds: number[]) {
  try {
    return post<UserBriefRespItem[], UserBriefReq>(USER_BRIEF, {
      userIds,
    });
  } catch (error) {
    return [];
  }
}
