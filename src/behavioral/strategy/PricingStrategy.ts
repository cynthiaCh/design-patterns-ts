export interface PricingStrategy {
    calculate(basePrice: number): number;
  }
  