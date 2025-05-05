import type { Observer } from './Observer.js';

export class AlertObserver implements Observer {
  update(data: any): void {
    console.log(`弹窗提醒：${data}`);
  }
}
