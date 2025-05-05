import type { OrderState } from './OrderState.js';
import { PendingState } from './PendingState.js';

export class OrderContext {
  private state: OrderState;

  constructor() {
    this.state = new PendingState();
  }

  setState(state: OrderState): void {
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }

  cancel(): void {
    this.state.cancel(this);
  }

  getStatus(): string {
    return this.state.status();
  }
}
