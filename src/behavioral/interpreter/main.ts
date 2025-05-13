import { Variable } from './Variable.js';
import { Add } from './Add.js';
import { Subtract } from './Subtract.js';
import { Context } from './Context.js';

console.log('\n=== Interpreter 解释器模式测试 ===');

const context = new Context();
context.setVariable('a', 10);
context.setVariable('b', 5);
context.setVariable('c', 2);

// 表达式 a + b - c
const expression = new Subtract(
  new Add(new Variable('a'), new Variable('b')),
  new Variable('c')
);

const result = expression.interpret(context.getContext());
console.log(`表达式 a + b - c 的结果是: ${result}`); // 输出：13
