import { AbstractProcess } from './AbstractProcess.js';

export class ConcreteProcessA extends AbstractProcess {
  protected step2(): void {
    console.log("具体实现 A 的步骤 2");
  }
}
