export class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}
