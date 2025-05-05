import type { OrderState } from './OrderState.js';
import { ShippedState } from './ShippedState.js';
import type { OrderContext } from './OrderContext.js';

export class PaidState implements OrderState {
  next(order: OrderContext): void {
    order.setState(new ShippedState());
  }

  cancel(order: OrderContext): void {
    console.log('已支付订单不能取消');
  }

  status(): string {
    return '已支付';
  }
}
