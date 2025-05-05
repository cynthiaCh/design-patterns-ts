import { Light } from './Light.js';
import { LightOnCommand } from './LightOnCommand.js';
import { LightOffCommand } from './LightOffCommand.js';
import { RemoteControl } from './RemoteControl.js';

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton();  // 💡 Light is ON

remote.pressUndo();    // 💡 Light is OFF

remote.setCommand(lightOff);
remote.pressButton();  // 💡 Light is OFF

remote.pressUndo();    // 💡 Light is ON
