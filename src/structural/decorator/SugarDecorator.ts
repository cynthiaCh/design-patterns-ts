import { BeverageDecorator } from './Decorator.js';

export class SugarDecorator extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + ' + Sugar';
  }

  cost(): number {
    return this.beverage.cost() + 1;
  }
}
