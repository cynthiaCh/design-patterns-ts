import { Command } from './Command.js';
import { Light } from './Light.js';

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
