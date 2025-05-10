import { AbstractProcess } from './AbstractProcess.js';

export class ConcreteProcessB extends AbstractProcess {
  protected step2(): void {
    console.log("具体实现 B 的步骤 2");
  }
}
