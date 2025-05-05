import { PricingStrategy } from './PricingStrategy.js';

export class SuperVipStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.8; // 8 折
  }
}
