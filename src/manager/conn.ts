import { freshToken } from "@/api";

export enum ConnModal {
  PING = -1,
  C2S_CHAT_HISTORY, // client to server 请求聊天记录
  S2C_CHAT_HISTORY, // server to client 聊天记录响应

  /**新的聊天信息 */
  C2S_NEW_CHAT,
  /**新的聊天信息 */
  S2C_NEW_CHAT,

  /**聊天信息广播 */
  S2C_CHAT_BROADCAST,
  /**中奖消息世界通告 */
  S2C_WORLD_PRIZE_BROADCAST,
  /**新的站内消息 */
  S2C_MEW_MSG,
  /**金钱变更 */
  S2C_MONEY_CHANGE,
  /**等级 */
  S2C_EXPERIENCE,
  /**玩三方游戏的通知 */
  S2C_THIRD_PLAY,

  /**领取奖励的通知 */
  S2C_CLAIM_REWARDS = 11,
}
interface ConnData {
  /**消息id */
  id: number;
  model: ConnModal;
  data: any;
}
interface CacheEntity {
  data: ConnData;
  time: number;
  callback?: (resp: any, error?: Error) => void;
}
export interface IConnectionListener<T = any> {
  onData: (data: T) => void;
  startListen: () => void;
  stopListen: () => void;
}

/**自增id */
let IDER = 0;
/**
 * 长链接，需要在登录成功中new一个出来，
 * 在退出登录的时候使用Connection.connection?.close()
 */
class Connection {
  private ws?: WebSocket;
  private url: string;
  private token = "";

  /**是否已经标记为关闭 */
  private isClose = false;

  /**缓存消息，可能存在重连中 */
  private cacheData: CacheEntity[] = [];

  /**监听器 */
  private listenerMap: Record<number, IConnectionListener[]> = {};

  private timer = 0;

  constructor() {
    // 本地测试
    if (process.env.VUE_APP_SERVER.startsWith("http")) {
      this.url = `${process.env.VUE_APP_SERVER.replace(/^http/, "ws")}/socket`;
    } else {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      this.url = `${protocol}//${window.location.host}${process.env.VUE_APP_SERVER}/socket`;
    }
    this.heartTick();
  }
  connect(token: string) {
    this.token = token;
    if (this.ws && this.ws.readyState === 1) {
      // 说明在正常连接中，重连会自动使用新的token
      return;
    }
    this.isClose = false;
    this.ws = new WebSocket(`${this.url}/${this.token}`);
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onopen = this.onOpen;
    this.timer = setInterval(this.queueCheck, 200);
  }
  addListener<T>(modal: ConnModal, listener: IConnectionListener<T>) {
    const list = this.listenerMap[modal];
    if (!list) {
      this.listenerMap[modal] = [listener];
    } else {
      if (list.includes(listener)) return;
      list.push(listener);
    }
  }
  removeListener(modal: ConnModal, listener: IConnectionListener) {
    const list = this.listenerMap[modal];
    if (!list) {
      return;
    } else {
      const index = list.indexOf(listener);
      if (index >= 0) {
        list.splice(index, 1);
      }
    }
  }
  private flushCache() {
    if (this.cacheData.length) {
      this.cacheData.forEach((entity) => this.resend(entity));
    }
  }
  private heartTick() {
    setInterval(() => {
      if (this.ws?.readyState === 1) {
        this.send({ model: ConnModal.PING, data: {} });
      }
    }, 10000);
  }
  queueCheck = () => {
    const now = Date.now();
    this.cacheData = this.cacheData.filter((entity) => {
      if (now - entity.time > 5000) {
        entity.callback?.(null, new Error("请求超时"));
        return false;
      }
      return true;
    });
  };
  private notifyListener(modal: number, data: ConnData) {
    const list = this.listenerMap[modal] || [];
    list.forEach((callback) => callback.onData(data));
  }

  private onOpen = () => {
    this.flushCache();
  };
  private onMessage = (e: MessageEvent<any>) => {
    if (!e.data) return; //心跳
    try {
      const msgData = JSON.parse(e.data) as ConnData;
      switch (msgData.model) {
        case ConnModal.S2C_CHAT_HISTORY: {
          // 聊天历史记录，不需要处理，在下面回调返回给调用方
          break;
        }
        case ConnModal.S2C_NEW_CHAT: {
          // 不需要处理
          break;
        }
        case ConnModal.S2C_CHAT_BROADCAST: {
          // 需要处理 todo
          this.notifyListener(ConnModal.S2C_CHAT_BROADCAST, msgData.data);
          break;
        }
        case ConnModal.S2C_WORLD_PRIZE_BROADCAST: {
          // todo
          this.notifyListener(
            ConnModal.S2C_WORLD_PRIZE_BROADCAST,
            msgData.data
          );
          break;
        }
        case ConnModal.S2C_MEW_MSG: {
          // todo
          this.notifyListener(ConnModal.S2C_MEW_MSG, msgData.data);
          break;
        }
        case ConnModal.S2C_MONEY_CHANGE: {
          // todo
          this.notifyListener(ConnModal.S2C_MONEY_CHANGE, msgData.data);
          break;
        }
        case ConnModal.S2C_EXPERIENCE: {
          // todo
          this.notifyListener(ConnModal.S2C_EXPERIENCE, msgData.data);
          break;
        }
        case ConnModal.S2C_THIRD_PLAY: {
          // todo
          this.notifyListener(ConnModal.S2C_THIRD_PLAY, msgData.data);
          break;
        }
        case ConnModal.S2C_CLAIM_REWARDS: {
          // todo
          this.notifyListener(ConnModal.S2C_CLAIM_REWARDS, msgData.data);
          break;
        }
      }
      if (msgData.id) {
        // 回调
        const index = this.cacheData.findIndex(
          (entity) => entity.data.id === msgData.id
        );
        if (index >= 0) {
          const entity = this.cacheData[index];
          entity.callback?.(msgData.data);
          this.cacheData.splice(index, 1);
        }
      }
    } catch (error) {
      // 不管
      console.log("conn数据异常", e.data);
    }
  };
  private onClose = (onclose: CloseEvent) => {
    if (onclose) {
      console.log(onclose.reason);
    }
    if (this.isClose) return;
    // 如果网络可用，则请求并连接
    if (navigator.onLine) {
      freshToken()
        .then(() => {
          setTimeout(() => {
            if (this.isClose) return;
            this.connect(this.token);
          }, 3000);
        })
        .catch(() => {
          // 异常后，2秒后重试
          setTimeout(this.onClose, 2000);
        });
    } else {
      // 如果网络不可用，则直接跳过并重试
      setTimeout(this.onClose, 2000);
    }
  };
  private resend(entity: CacheEntity) {
    if (this.isClose) return;
    if (this.ws?.readyState === 1) {
      this.ws?.send(JSON.stringify(entity.data));
    }
  }

  send(
    data: Omit<ConnData, "id">,
    callback?: (resp: any, error?: Error) => void
  ) {
    if (this.isClose) return;
    const packData: ConnData = {
      ...data,
      id: ++IDER,
    };
    // 缓存消息
    this.cacheData.push({ data: packData, time: Date.now(), callback });
    if (this.ws?.readyState === 1) {
      this.ws?.send(JSON.stringify(packData));
    }
  }

  close() {
    this.isClose = true;
    this.ws?.close();
    this.ws = undefined;
    clearInterval(this.timer);
    this.timer = 0;
  }
}

export default new Connection();
