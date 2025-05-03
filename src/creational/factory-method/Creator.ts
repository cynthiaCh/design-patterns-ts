// src/creational/factory-method/Creator.ts
import type { Product } from './Product.js';

export abstract class Creator {
  abstract factoryMethod(): Product;

  operation(): string {
    const product = this.factoryMethod();
    return `工厂创建了一个产品 → ${product.use()}`;
  }
}
