import { PricingStrategy } from './PricingStrategy.js';

export class VipStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.9; // 9 折
  }
}
