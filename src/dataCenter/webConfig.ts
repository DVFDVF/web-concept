import { Configs, Currency, NetWork, WebConfigResp } from '@/api/protocol';

class WebConfig {
  cryptoCurrencies: Currency[] = [];
  cryptoNetworks: NetWork[] = [];
  levelConfigs: Configs[] = [];
  profitRate = 0.9902;
  feedBackmail = '';
  urlPrefix = '';
  clientId = '';
  androidClientId = '';
  scope = '';
  //游戏的最小金额
  min = 0.4;
  dt = 0;
  drawOut = ['hkp'];
  countryCode = '+55';
  chatAmount = 200000;
  currencyIcon = '/fury/assets/currency/27241707814653_.pic.jpg';
  currencyMap: Record<number, Currency | undefined> = {};
  networkMap: Record<number, NetWork | undefined> = {};
  downloadLink = '';
  customerServiceLink = '';
  channelLink = '';
  update(config: WebConfigResp, dt: number) {
    this.cryptoCurrencies = config.cryptoCurrencies;
    this.cryptoNetworks = config.cryptoNetworks;
    this.levelConfigs = config.levelConfigs;
    this.profitRate = config.profitRate;
    this.feedBackmail = config.feedBackmail;
    this.urlPrefix = config.urlPrefix;
    this.clientId = config.clientId;
    this.androidClientId = config.androidClientId;
    this.downloadLink = config.downloadLink;
    this.customerServiceLink = config.customerServiceLink;
    this.channelLink = config.channelLink;
    this.scope = config.scope;
    this.cryptoCurrencies.forEach((item) => {
      this.currencyMap[item.id] = item;
    });
    this.cryptoNetworks.forEach((item) => {
      this.networkMap[item.id] = item;
    });
    if (config.time) {
      this.dt = config.time - Date.now() + dt;
      if (this.dt < 0) this.dt = 0;
    }
    if (config.drawOut) {
      this.drawOut = config.drawOut;
    }
  }
}

export const webConfig = new WebConfig();
