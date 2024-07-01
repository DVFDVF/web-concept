import { ApiCode } from '@/manager/const';
import { forceReload } from '@/manager/view';
import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { tokenController } from '../manager/token';
import { FRESH_TOKEN_URL } from './protocol';
import { tip } from '@/components/warn/warn';
import dataCenter from '@/dataCenter';

const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  timeout: 10 * 1000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
service.interceptors.request.use((config) => {
  // 这里可以设置token: config!.headers!.Authorization = token
  config.headers.auth = tokenController.token;
  config.headers.sign = dataCenter.sign[0];
  return config;
});
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data;

    // 获取当前请求的接口地址
    if (data.code === 200) {
      return data.data;
    }
    if (data.code === ApiCode.UN_AUTH) {
      //退出登录
      return freshToken().then(() => service(response.config));
    } else if (
      data.code === ApiCode.FRESH_TOKEN_EXPIRE ||
      data.code === ApiCode.FRESH_TOKEN_UNKNOWN
    ) {
      // 长token已失效
      return Promise.reject('登录已过期');
    } else if (data.code === ApiCode.TOKEN_EXPIRE_UPDATA) {
      //如果长token失效刷新token
      tokenController.updateFreshToken(data.data);
      window.location.reload();
      return Promise.reject('restart');
    } else {
      if (data.code > 10000) {
        if (data.code == 20016) {
          forceReload();
        } else {
          // 普通错误，警告提醒
          tip.error(data.msg);
        }
      } else {
        // 业务严重错误，弹窗提醒
        tip.error(data.msg);
      }
      return Promise.reject(data.msg);
    }
  },
  (err) => {
    if (err.config.headers.auto) {
      tip.error(err.message || '网络异常，请稍后重试');
    }
    return Promise.reject(err.response);
  },
);

let freshPromise: Promise<void> | undefined = undefined;

export function freshToken() {
  if (!navigator.onLine) {
    return Promise.reject(new Error('网络异常'));
  }
  const freshToken = tokenController.freshToken;
  if (freshToken) {
    freshPromise = post<string, { freshToken: string }>(FRESH_TOKEN_URL, {
      freshToken,
    })
      .then((resp) => tokenController.updateToken(resp))
      .catch((err: string) => {
        if (err == '登录已过期') {
          return Promise.reject(new Error('登录已过期'));
        }
      })
      .finally(() => {
        freshPromise = undefined;
      });
    return freshPromise;
  } else {
    return Promise.reject(new Error('登录已过期'));
  }
}

export async function get<R = any, T = any>(
  url: string,
  params?: T,
  header?: Record<string, any>,
): Promise<R> {
  const query = params ? qs.stringify(params) : undefined;
  const connectSymbol = url.includes('?') ? '&' : '?';
  return await service.get(
    query ? `${url}${connectSymbol}${query}` : url,
    header,
  );
}

export async function post<R = any, T = any>(
  url: string,
  body?: T,
  header?: Record<string, any>,
): Promise<R> {
  return await service.post(url, body, header);
}

export default service;
