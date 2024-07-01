export interface Size {
  width: number;
  height: number;
}
/**
 * 监听容器宽高
 */
export default class SizeObserver {
  private target?: HTMLElement;
  private observer: ResizeObserver;
  private lastSize!: Size;
  /**
   * @param onChange 宽高变化的回调，可以用newSize内的值做视图上的变更
   */
  constructor(onChange: (newSize: Size, oldSize: Size) => void) {
    this.observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.contentRect;
        if (!rect.width) return;
        if (
          rect.width !== this.lastSize.width ||
          rect.height !== this.lastSize.height
        ) {
          const newSize: Size = { width: rect.width, height: rect.height };
          onChange(newSize, this.lastSize);
          this.lastSize = newSize;
        }
      }
    });
  }
  /**监听宽高变化，如果监听的是新的元素，会自动取消以前的监听 */
  observe(element?: HTMLElement) {
    if (this.target === element) {
      return;
    }
    if (this.target) {
      this.observer.unobserve(this.target);
    }
    this.target = element;
    if (this.target) {
      this.lastSize = {
        width: this.target.offsetWidth,
        height: this.target.offsetHeight,
      };
      this.observer.observe(this.target);
    }
  }
  unobserve() {
    if (this.target) {
      this.observer.unobserve(this.target);
    }
    this.target = undefined;
  }
}
