import { Currency } from '@/api/protocol';
import './index.less';
import { formatBalance } from '@/utils';
/**金额漂浮组件 */
class MoneyFloat {
  private element: HTMLDivElement;
  constructor(currency: Currency, value: number) {
    this.element = document.createElement('div');
    this.element.className = 'money-float row-center';

    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = `${process.env.VUE_APP_S3}${currency.icon}`;
    this.element.appendChild(icon);

    const label = document.createElement('span');
    label.className = 'value';
    label.textContent = formatBalance(currency, value);
    this.element.appendChild(label);
  }
  /** */
  show(container: HTMLDivElement) {
    container.appendChild(this.element);
    setTimeout(() => {
      this.element.remove();
    }, 2000);
  }
}

export default MoneyFloat;
