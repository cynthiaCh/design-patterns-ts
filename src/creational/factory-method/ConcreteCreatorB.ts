// src/creational/factory-method/ConcreteCreatorB.ts
import { Creator } from './Creator.js';
import { ProductB } from './ProductB.js';

export class ConcreteCreatorB extends Creator {
  factoryMethod() {
    return new ProductB();
  }
}
