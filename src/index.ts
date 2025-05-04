import { Singleton } from './creational/singleton.js';

import { ConcreteCreatorA } from './creational/factory-method/ConcreteCreatorA.js';
import { ConcreteCreatorB } from './creational/factory-method/ConcreteCreatorB.js';

import { ChinaFruitFactory } from './creational/abstract-factory/ChinaFruitFactory.js';
import { USFruitFactory } from './creational/abstract-factory/USFruitFactory.js';

import { ConcreteUserProfileBuilder } from './creational/builder/ConcreteUserProfileBuilder.js';
import { Field } from './creational/prototype/Field.js';

import { OldCharger } from './structural/adapter/Adaptee.js';
import { ChargerAdapter } from './structural/adapter/Adapter.js';

import { Coffee } from './structural/decorator/Coffee.js';
import { MilkDecorator } from './structural/decorator/MilkDecorator.js';
import { SugarDecorator } from './structural/decorator/SugarDecorator.js';

console.log('=== Singleton 测试 ===');
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log('a === b ?', a === b); // 👉 应该是 true
console.log(a.say()); // 👉 输出：我是唯一实例

console.log('\n=== Factory Method 测试 ===');
const creatorA = new ConcreteCreatorA();
console.log(creatorA.operation()); // 输出：工厂创建了一个产品 → 使用产品A
const creatorB = new ConcreteCreatorB();
console.log(creatorB.operation()); // 输出：工厂创建了一个产品 → 使用产品B

console.log('\n=== Abstract Factory 测试 ===');
const chinaFactory = new ChinaFruitFactory();
console.log(chinaFactory.createApple().eat()); // 吃的是中国苹果
console.log(chinaFactory.createBanana().eat()); // 吃的是中国香蕉
const usFactory = new USFruitFactory();
console.log(usFactory.createApple().eat()); // 吃的是美国苹果
console.log(usFactory.createBanana().eat()); // 吃的是美国香蕉

console.log('\n=== builder 测试 ===');
const builder = new ConcreteUserProfileBuilder();
const userProfile = builder
  .setBio('前端工程师，喜欢喝咖啡和构建DSL系统')
  .addInterest('设计模式')
  .addInterest('Vue3 + TypeScript')
  .setSocial('', 'https://github.com/cynthiaCh')
  .build();
console.log(userProfile.toString());

console.log('\n=== prototype 测试 ===');
const original = new Field('input', '用户名', true, '请输入用户名');
const clone = original.clone();
clone.label = '昵称';
clone.tooltip = '请填写你的昵称';
console.log('原型：', original.toString());
console.log('克隆：', clone.toString());

console.log('\n=== Adapter 测试 ===');
const oldCharger = new OldCharger();
const adapter = new ChargerAdapter(oldCharger);
adapter.chargeWithUSB();

console.log('\n=== Decorator 装饰器模式测试 ===');
let beverage = new Coffee(); // 原始咖啡
beverage = new MilkDecorator(beverage); // 加牛奶
beverage = new SugarDecorator(beverage); // 加糖
console.log('描述：', beverage.getDescription()); // Coffee + Milk + Sugar
console.log('总价：', beverage.cost()); // 5 + 2 + 1 = 8