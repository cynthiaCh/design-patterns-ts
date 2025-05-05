import { TV } from './TV.js';

export class XiaomiTV implements TV {
  on(): void {
    console.log('Xiaomi TV is ON');
  }

  off(): void {
    console.log('Xiaomi TV is OFF');
  }

  tuneChannel(channel: number): void {
    console.log(`Xiaomi TV switched to channel ${channel}`);
  }
}
