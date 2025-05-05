import type { Observer } from './Observer.js';

export class LoggerObserver implements Observer {
  update(data: any): void {
    console.log('Logger 观察到更新：', data);
  }
}
