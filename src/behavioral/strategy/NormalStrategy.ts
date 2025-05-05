import { PricingStrategy } from './PricingStrategy.js';

export class NormalStrategy implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice; // 不打折
  }
}
