import { TV } from './TV.js';

export class SonyTV implements TV {
  on(): void {
    console.log('Sony TV is ON');
  }

  off(): void {
    console.log('Sony TV is OFF');
  }

  tuneChannel(channel: number): void {
    console.log(`Sony TV tuned to channel ${channel}`);
  }
}
