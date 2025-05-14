import { Memento } from './Memento.js';

export class Caretaker {
  private mementos: Memento[] = [];

  addMemento(m: Memento) {
    this.mementos.push(m);
  }

  getMemento(index: number): Memento | undefined {
    return this.mementos[index];
  }
}
