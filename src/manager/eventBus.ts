// EventBus.ts

type CallbackFunc = (data: any) => void;
class EventBus {
  private events: { [key: string]: CallbackFunc[] } = {};

  on(eventName: string, callback: CallbackFunc): void {
    let listens = this.events[eventName];
    if (!listens) {
      this.events[eventName] = listens = [];
    }
    if (listens.includes(callback)) return;
    listens.push(callback);
  }

  emit(eventName: string, data?: any): void {
    const listens = this.events[eventName];
    if (!listens) return;
    const invokes = listens.concat();
    invokes.forEach((callback) => callback(data));
  }

  off(eventName: string, callback: CallbackFunc): void {
    const listens = this.events[eventName];
    if (!listens) return;
    const index = listens.indexOf(callback);
    if (index >= 0) {
      listens.splice(index, 1);
    }
  }
}

export default new EventBus();

export enum Events {
  MONEY_CHANGE = '0',
}
