import { RemoteControl } from './RemoteControl.js';

export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    console.log('Muted the TV');
  }
}
