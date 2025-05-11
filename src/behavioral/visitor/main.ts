import { ConcreteElementA, ConcreteElementB } from './ConcreteElements.js';
import { Visitor1, Visitor2 } from './ConcreteVisitors.js';

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor1 = new Visitor1();
const visitor2 = new Visitor2();

console.log('--- 使用 Visitor1 ---');
for (const element of elements) {
  element.accept(visitor1);
}

console.log('--- 使用 Visitor2 ---');
for (const element of elements) {
  element.accept(visitor2);
}
