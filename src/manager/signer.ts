// @ts-nocheck
import dataCenter from '@/dataCenter';
import sha256 from 'crypto-js/sha256';
import hex from 'crypto-js/enc-hex';
const spliceName = 'ecilps';
const signName = '7369676e';

function parseName(v: string) {
  const r: string[] = [];
  for (let i = 0; i < v.length >> 1; ++i) {
    r.push(String.fromCharCode(parseInt(v.slice(i * 2, i * 2 + 2), 16)));
  }
  return r.join('');
}

class Signer {
  private sp: typeof Array.prototype.splice;
  private k = '';

  constructor() {
    const name = spliceName.split('').reverse().join('');
    // @ts-ignore
    const sign = dataCenter[parseName(signName)];
    // @ts-ignore
    this.sp = Array.prototype[name].bind(sign);
    this.k = parseName((3237 << 1) + '');
  }
  async start() {
    await this.run();
    setInterval(this.run, 200);
  }
  run = async () => {
    const serverTime = Date.now() + dataCenter.webConfig[this.k];
    const value = sha256(serverTime + 'aq6nJGnzLyrqI1HZl').toString(hex);
    this.sp(
      0,
      1,
      `${value}-${serverTime[parseName('746f537472696e67')](2 << 3)}`,
    );
  };
}

export default new Signer();
