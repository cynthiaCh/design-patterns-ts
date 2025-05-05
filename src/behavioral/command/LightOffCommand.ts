import { Command } from './Command.js';
import { Light } from './Light.js';

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
