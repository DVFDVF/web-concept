import conn, { ConnModal, IConnectionListener } from '@/manager/conn';
import userManager from '@/manager/userManager';
import { MAX_INT } from '@/utils/define';
import { reactive } from 'vue';

const PAGE_SIZE = 30;

enum ChatType {
  TEXT, // 文字
  IMAGE, // 图片
  VIDEO, // 视频
  AUDIO, // 语音
  GAME, // 游戏
  TIPS, // 小费
}
export interface ChatData {
  // todo 定义数据结构
  type: number;
  content: string;
  id?: number;
  userId: number;
  replyId?: number;
}

/**聊天室数据 */
class ChatRoom implements IConnectionListener<ChatData> {
  list: ChatData[] = [];
  /**正在回复的聊天消息 */
  reply?: ChatData;
  startListen() {
    conn.addListener(ConnModal.S2C_CHAT_BROADCAST, this);
  }
  stopListen() {
    conn.removeListener(ConnModal.S2C_CHAT_BROADCAST, this);
  }

  // 聊天消息的广播
  onData(data: ChatData) {
    this.list.push(data);
  }

  init() {
    // 有足够的消息，就不拉取历史记录了
    if (this.list.length >= PAGE_SIZE) return Promise.resolve();
    return this.pullHistory();
  }
  /**下拉请求历史消息 */
  pullHistory() {
    const firstChat = this.list[0];
    const firstMsgId = firstChat?.id || MAX_INT;
    // 初始化请求最新N条聊天
    return this.queryChatHistory(firstMsgId, PAGE_SIZE).then((list) => {
      return userManager.getUsers(list.map((item) => item.userId)).then(() => {
        this.list = list.concat(this.list);
      });
    });
  }

  clear() {
    this.list.length = 0;
  }

  // 发送各种消息
  sendTextChat(content: string) {
    const replyId = this.reply?.id;
    conn.send(
      {
        model: ConnModal.C2S_NEW_CHAT,
        data: { type: ChatType.TEXT, content, replyId },
      },
      (_, err) => {
        if (!err) {
          this.reply = undefined;
        }
      },
    );
  }
  sendImageChat(file: File) {
    // todo 上传服务器，并拿到地址
    const url = '';
    const width = 0,
      height = 0;
    conn.send({
      model: ConnModal.C2S_NEW_CHAT,
      data: {
        type: ChatType.IMAGE,
        content: JSON.stringify({ url, width, height }),
      },
    });
  }
  /**请求早于某条消息的最近N条消息 */
  queryChatHistory(lastMsgId: number, limit: number) {
    return new Promise<ChatData[]>((resolve, reject) => {
      conn.send(
        {
          model: ConnModal.C2S_CHAT_HISTORY,
          data: { msgId: lastMsgId, limit: limit },
        },
        (data: ChatData[], err?: Error) => {
          if (err) {
            return reject(err);
          }
          resolve(data);
        },
      );
    });
  }
}

export const chatRoom = reactive(new ChatRoom());
// chatRoom.startListen();
