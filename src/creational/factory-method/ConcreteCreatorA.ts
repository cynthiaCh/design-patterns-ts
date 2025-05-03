// src/creational/factory-method/ConcreteCreatorA.ts
import { Creator } from './Creator.js'
import { ProductA } from './ProductA.js'

export class ConcreteCreatorA extends Creator {
  factoryMethod() {
    return new ProductA()
  }
}
