import { Expression } from './Expression.js';

export class Variable implements Expression {
  constructor(private name: string) {}

  interpret(context: Map<string, number>): number {
    return context.get(this.name) ?? 0;
  }
}
