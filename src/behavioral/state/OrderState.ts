export interface OrderState {
    next(order: OrderContext): void;
    cancel(order: OrderContext): void;
    status(): string;
  }
  