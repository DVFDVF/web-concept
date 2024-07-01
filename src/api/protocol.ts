export const FRESH_TOKEN_URL = 'v1/global/fresh-token';

export const AUTO_LOGIN = '/v1/user/autoLogin';

export interface AutoLoginResp {
  id: number;
  name: string;
  avatar: string;
  token: string;
  email: string;
  level: number;
  cashBack: number;
  createTime: string;
  isFirstRecharge: number;
  pixelId?: string;
  exp: number;
  oldUserExpireTime?: string;
}

export const WEB_CONFIG = '/v1/global/getCurrencyAndNetwork';

export interface NetWork {
  id: number;
  icon: string;
  name: string;
  logo: string;
  logo2: string;
}
export interface Currency {
  id: number;
  brief: string;
  icon: string;
  name: string;
  logo: string;
  usdtRate: number;
}
export interface Configs {
  id: number;
  level: number;
  chip: number;
  icon: string;
  cashBack: number;
}
export interface WebConfigResp {
  cryptoNetworks: NetWork[];
  cryptoCurrencies: Currency[];
  levelConfigs: Configs[];
  profitRate: number;
  feedBackmail: string;
  urlPrefix: string;
  time: number;
  clientId: string;
  androidClientId: string;
  scope: string;
  downloadLink: string;
  customerServiceLink: string;
  channelLink: string;
  drawOut?: string[];
}

export enum SocketType {
  GAME = 1,
  NOTIFY = 2,
}

/**
 * 长链接的数据结构
 */
export interface GameData {
  type: SocketType.GAME;
  data: any;
}
export interface NotifyData {
  type: SocketType.NOTIFY;
  data: any;
}

export const USER_BRIEF = '/v1/global/getUser';

export interface UserBriefReq {
  userIds: number[];
}

export interface UserBriefRespItem {
  id: number;
  name: string;
  level: number;
  exp: number;
  avatar: string;
}

//获取通知
export const STATION_MESSAGE = '/v1/message/getMessage';

export enum MessageType {
  PERSONAL = 1,
  PLATFORM = 2,
}
export interface Message {
  id: number;
  content: string;
  status: number;
  time: string;
  cmd: string;
  type: number;
}

export type MessageResp = Message[];
