import type { Beverage } from './Beverage.js';

export abstract class BeverageDecorator implements Beverage {
  constructor(protected beverage: Beverage) {}

  abstract getDescription(): string;
  abstract cost(): number;
}
