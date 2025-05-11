import { ConcreteElementA } from './ConcreteElements.js';
import { ConcreteElementB } from './ConcreteElements.js';

export interface Visitor {
  visitElementA(element: ConcreteElementA): void;
  visitElementB(element: ConcreteElementB): void;
}
