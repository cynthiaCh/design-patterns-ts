import { Expression } from './Expression.js';

export class Subtract implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Map<string, number>): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
