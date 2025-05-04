import { BeverageDecorator } from './Decorator.js';

export class MilkDecorator extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + ' + Milk';
  }

  cost(): number {
    return this.beverage.cost() + 2;
  }
}
