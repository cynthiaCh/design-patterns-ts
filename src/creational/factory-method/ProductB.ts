// src/creational/factory-method/ProductB.ts
import { Product } from './Product.js'

export class ProductB implements Product {
  use() {
    return '使用产品B'
  }
}
