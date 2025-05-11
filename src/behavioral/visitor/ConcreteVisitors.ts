import { Visitor } from './Visitor.js';
import { ConcreteElementA, ConcreteElementB } from './ConcreteElements.js';

export class Visitor1 implements Visitor {
  visitElementA(element: ConcreteElementA): void {
    console.log(`Visitor1 handles A: ${element.operationA()}`);
  }

  visitElementB(element: ConcreteElementB): void {
    console.log(`Visitor1 handles B: ${element.operationB()}`);
  }
}

export class Visitor2 implements Visitor {
  visitElementA(element: ConcreteElementA): void {
    console.log(`Visitor2 transforms A`);
  }

  visitElementB(element: ConcreteElementB): void {
    console.log(`Visitor2 analyzes B`);
  }
}
