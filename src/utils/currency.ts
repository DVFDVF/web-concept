// @ts-nocheck
import Big from 'big.js';
import { Currency } from '@/api/protocol';

/**法定货币名字 */
const OFFICIAL_CURRENCY_NAME = 'BRL';

export function extenalOfficial(list: Currency[], isExtennal?: boolean) {
  if (isExtennal) {
    return list.filter((item) => item.name !== OFFICIAL_CURRENCY_NAME);
  }
  return list;
}

export function pickOfficial(list: Currency[]) {
  return list.find((item) => item.name === OFFICIAL_CURRENCY_NAME);
}

/**固定9位小数 */
export function formatFix9Money(value?: number, currency?: Currency) {
  value = value || 0;
  if (currency?.name === OFFICIAL_CURRENCY_NAME) {
    return toFloor(value, 2);
  }
  return toMaxFixed(value, 9);
}
/**普通格式化 */
export function formatMoney(value?: number, currency?: Currency) {
  value = value || 0;
  if (currency?.name === OFFICIAL_CURRENCY_NAME) {
    return toFloor(value, 2);
  }
  return toFloor(value, 6);
}

const FLOORS = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
];
/**向下取整的格式化小数，并且小数点动态保留 */
export function toFloor(value: number, length: number) {
  const ret = Math.floor(new Big(value).times(FLOORS[length])) / FLOORS[length];
  return ret.toFixed(length);
}

export function toMaxFixed(value: number, length: number) {
  if (value >= FLOORS[length]) return `${Math.floor(value)}`;
  return toFloor(value, length).slice(0, length + 1);
}
