import { SonyTV } from './SonyTV.js';
import { XiaomiTV } from './XiaomiTV.js';
import { RemoteControl } from './RemoteControl.js';
import { AdvancedRemoteControl } from './AdvancedRemoteControl.js';

console.log('=== Sony 遥控器 ===');
const sonyRemote = new RemoteControl(new SonyTV());
sonyRemote.turnOn();
sonyRemote.setChannel(5);
sonyRemote.turnOff();

console.log('\n=== 小米遥控器（高级） ===');
const miRemote = new AdvancedRemoteControl(new XiaomiTV());
miRemote.turnOn();
miRemote.setChannel(12);
miRemote.mute();
miRemote.turnOff();
