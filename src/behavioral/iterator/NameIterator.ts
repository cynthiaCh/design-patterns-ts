import { Iterator } from './Iterator.js';

export class NameIterator implements Iterator<string> {
  private index = 0;

  constructor(private names: string[]) {}

  hasNext(): boolean {
    return this.index < this.names.length;
  }

  next(): string {
    if (this.hasNext()) {
      return this.names[this.index++];
    }
    throw new Error('No more elements');
  }
}
