import './index.less';
/**金额漂浮组件 */
class MoneyFloatGineNine {
  private element: HTMLDivElement;
  constructor(value: string) {
    this.element = document.createElement('div');
    this.element.className = 'money-float gine-nine-float row-center';
    const label = document.createElement('span');
    label.className = 'gine-nine-value';
    label.textContent = value;
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

export default MoneyFloatGineNine;
