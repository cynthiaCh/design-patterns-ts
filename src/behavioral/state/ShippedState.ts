import type { OrderState } from './OrderState.js';
import type { OrderContext } from './OrderContext.js';

export class ShippedState implements OrderState {
  next(order: OrderContext): void {
    console.log('订单已发货，不能再前进');
  }

  cancel(order: OrderContext): void {
    console.log('订单已发货，不能取消');
  }

  status(): string {
    return '已发货';
  }
}
