// src/creational/abstract-factory/FruitFactory.ts
import type { Apple, Banana } from './Fruit.js';

export interface FruitFactory {
  createApple(): Apple;
  createBanana(): Banana;
}
