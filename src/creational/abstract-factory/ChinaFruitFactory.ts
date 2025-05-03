// src/creational/abstract-factory/ChinaFruitFactory.ts
import type { FruitFactory } from './FruitFactory.js';
import { ChinaApple } from './ChinaApple.js';
import { ChinaBanana } from './ChinaBanana.js';

export class ChinaFruitFactory implements FruitFactory {
  createApple() {
    return new ChinaApple();
  }

  createBanana() {
    return new ChinaBanana();
  }
}
