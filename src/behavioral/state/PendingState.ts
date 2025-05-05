import type { OrderState } from './OrderState.js';
import { PaidState } from './PaidState.js';
import { CancelledState } from './CancelledState.js';
import type { OrderContext } from './OrderContext.js';

export class PendingState implements OrderState {
  next(order: OrderContext): void {
    order.setState(new PaidState());
  }

  cancel(order: OrderContext): void {
    order.setState(new CancelledState());
  }

  status(): string {
    return '待支付';
  }
}
