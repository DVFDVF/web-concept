// 普通token
export const TOKEN_KEY = process.env.VUE_APP_TOKEN;
// 刷新token
export const FRESH_TOKEN_KEY = process.env.VUE_APP_FRESH_TOKEN;

export enum ApiCode {
  FRESH_TOKEN_UNKNOWN = 401, // 刷新token不存在
  FRESH_TOKEN_EXPIRE = 402, // 刷新token已失效
  UN_AUTH = 405, // 未登录或者登录失效
  TOKEN_EXPIRE_UPDATA = 406, //刷新长token
}
