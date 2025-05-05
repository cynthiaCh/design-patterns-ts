import { PricingStrategy } from './PricingStrategy.js';

export class OrderContext {
  constructor(private strategy: PricingStrategy) {}

  calculateTotal(basePrice: number): number {
    return this.strategy.calculate(basePrice);
  }
}
