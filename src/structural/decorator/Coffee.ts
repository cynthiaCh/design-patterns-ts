import { Beverage } from './Beverage.js';

export class Coffee implements Beverage {
  getDescription(): string {
    return 'Coffee';
  }

  cost(): number {
    return 5;
  }
}
