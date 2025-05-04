import { Coffee } from './Coffee.js';
import { MilkDecorator } from './MilkDecorator.js';
import { SugarDecorator } from './SugarDecorator.js';

console.log('\n=== Decorator 装饰器模式测试 ===');
let beverage = new Coffee(); // 基础咖啡
beverage = new MilkDecorator(beverage); // 加牛奶
beverage = new SugarDecorator(beverage); // 再加糖

console.log('描述：', beverage.getDescription()); // Coffee + Milk + Sugar
console.log('总价：', beverage.cost()); // 5 + 2 + 1 = 8
