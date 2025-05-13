export class Context {
  private variables = new Map<string, number>();

  setVariable(name: string, value: number) {
    this.variables.set(name, value);
  }

  getVariable(name: string): number {
    return this.variables.get(name) ?? 0;
  }

  getContext(): Map<string, number> {
    return this.variables;
  }
}
