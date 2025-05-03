// src/creational/abstract-factory/USFruitFactory.ts
import type { FruitFactory } from './FruitFactory.js'
import { USApple } from './USApple.js'
import { USBanana } from './USBanana.js'

export class USFruitFactory implements FruitFactory {
  createApple() {
    return new USApple()
  }

  createBanana() {
    return new USBanana()
  }
}
