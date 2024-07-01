class FrameManager {
  private updaters: Updater[] = [];
  private running = false;
  private time = 0;
  register(updater: Updater) {
    if (this.updaters.includes(updater)) {
      return;
    }
    this.updaters.push(updater);
    this.start();
  }
  unregister(updater: Updater) {
    const index = this.updaters.indexOf(updater);
    if (index >= 0) {
      this.updaters.splice(index, 1);
      if (this.updaters.length < 1) {
        this.stop();
      }
    }
  }
  private start() {
    if (this.running) return;
    this.running = true;
    this.time = Date.now();
    requestAnimationFrame(this.update);
  }
  private stop() {
    this.running = false;
  }
  private update = () => {
    if (!this.running) return;
    const now = Date.now();
    const dt = now - this.time;
    this.time = now;
    this.updaters.forEach((updater) => updater.update(dt));
    requestAnimationFrame(this.update);
  };
}

export const frameManager = new FrameManager();

export class Updater {
  protected espTime = 0;
  update(est: number) {
    this.espTime += est;
  }
  register() {
    this.espTime = 0;
    frameManager.register(this);
  }
  unregister() {
    frameManager.unregister(this);
  }
}
