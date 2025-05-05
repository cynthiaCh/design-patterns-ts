import type { TV } from './TV.js';

export class RemoteControl {
  constructor(protected tv: TV) {}

  turnOn(): void {
    this.tv.on();
  }

  turnOff(): void {
    this.tv.off();
  }

  setChannel(channel: number): void {
    this.tv.tuneChannel(channel);
  }
}
