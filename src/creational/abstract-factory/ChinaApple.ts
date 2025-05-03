// src/creational/abstract-factory/ChinaApple.ts
import type { Apple } from './Fruit.js';

export class ChinaApple implements Apple {
  eat() {
    return '吃的是中国苹果';
  }
}
