import { OrderContext } from './OrderContext.js';

const order = new OrderContext();

console.log(order.getStatus()); // 待支付
order.next();                   // 支付 → 已支付
console.log(order.getStatus()); // 已支付
order.cancel();                // ❌ 已支付不能取消
order.next();                  // 发货 → 已发货
console.log(order.getStatus()); // 已发货
order.next();                  // ❌ 无法再前进
