import { Aggregate } from './Aggregate.js';
import { Iterator } from './Iterator.js';
import { NameIterator } from './NameIterator.js';

export class NameRepository implements Aggregate<string> {
  private names: string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];

  getIterator(): Iterator<string> {
    return new NameIterator(this.names);
  }
}
