import { Iterator } from './Iterator.js';

export interface Aggregate<T> {
  getIterator(): Iterator<T>;
}
