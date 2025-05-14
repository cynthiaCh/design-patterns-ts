import { Originator } from './Originator.js';
import { Caretaker } from './Caretaker.js';

console.log('\n=== Memento 备忘录模式测试 ===');

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('状态 #1');
caretaker.addMemento(originator.save());

originator.setState('状态 #2');
caretaker.addMemento(originator.save());

originator.setState('状态 #3');

console.log(`当前状态：${originator.getState()}`);
originator.restore(caretaker.getMemento(0)!); // 恢复到状态 #1
console.log(`恢复后的状态：${originator.getState()}`);
