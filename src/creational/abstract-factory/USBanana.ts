// src/creational/abstract-factory/USBanana.ts
import type { Banana } from './Fruit.js'

export class USBanana implements Banana {
  eat() {
    return '吃的是美国香蕉'
  }
}
