import { Visitor } from './Visitor.js';

export interface Element {
  accept(visitor: Visitor): void;
}
