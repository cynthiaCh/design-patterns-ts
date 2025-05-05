import { NormalStrategy } from './NormalStrategy.js';
import { VipStrategy } from './VipStrategy.js';
import { SuperVipStrategy } from './SuperVipStrategy.js';
import { OrderContext } from './OrderContext.js';

const basePrice = 100;

const normalOrder = new OrderContext(new NormalStrategy());
console.log('普通用户：', normalOrder.calculateTotal(basePrice)); // 100

const vipOrder = new OrderContext(new VipStrategy());
console.log('VIP用户：', vipOrder.calculateTotal(basePrice)); // 90

const superVipOrder = new OrderContext(new SuperVipStrategy());
console.log('超级会员：', superVipOrder.calculateTotal(basePrice)); // 80
