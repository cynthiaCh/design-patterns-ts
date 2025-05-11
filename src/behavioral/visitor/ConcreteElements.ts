import { Element } from './Element.js';
import { Visitor } from './Visitor.js';

export class ConcreteElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }

  operationA(): string {
    return 'ElementA specific logic';
  }
}

export class ConcreteElementB implements Element {
  accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }

  operationB(): string {
    return 'ElementB specific logic';
  }
}
