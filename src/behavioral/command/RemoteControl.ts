import { Command } from './Command.js';

export class RemoteControl {
  private command!: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }

  pressUndo(): void {
    this.command.undo();
  }
}
