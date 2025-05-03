// src/creational/factory-method/ProductA.ts
import { Product } from './Product.js'

export class ProductA implements Product {
  use() {
    return '使用产品A'
  }
}
