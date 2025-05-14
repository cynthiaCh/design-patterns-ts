import { Memento } from './Memento.js';

export class Originator {
  private state: string = '';

  setState(state: string) {
    console.log(`Originator: 设置状态为 "${state}"`);
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  save(): Memento {
    console.log('Originator: 保存当前状态');
    return new Memento(this.state);
  }

  restore(memento: Memento) {
    this.state = memento.getState();
    console.log(`Originator: 状态恢复为 "${this.state}"`);
  }
}
