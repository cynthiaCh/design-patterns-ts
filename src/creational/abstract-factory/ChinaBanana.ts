// src/creational/abstract-factory/ChinaBanana.ts
import type { Banana } from './Fruit.js';

export class ChinaBanana implements Banana {
  eat() {
    return '吃的是中国香蕉';
  }
}
