// src/creational/abstract-factory/USApple.ts
import type { Apple } from './Fruit.js';

export class USApple implements Apple {
  eat() {
    return '吃的是美国苹果';
  }
}
