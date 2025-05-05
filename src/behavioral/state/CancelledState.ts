import type { OrderState } from './OrderState.js';
import type { OrderContext } from './OrderContext.js';

export class CancelledState implements OrderState {
  next(order: OrderContext): void {
    console.log('已取消订单不能再进行');
  }

  cancel(order: OrderContext): void {
    console.log('订单已取消');
  }

  status(): string {
    return '已取消';
  }
}
