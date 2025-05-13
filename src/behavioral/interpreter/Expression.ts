export interface Expression {
  interpret(context: Map<string, number>): number;
}
