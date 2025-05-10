import { ConcreteProcessA } from './ConcreteProcessA.js';
import { ConcreteProcessB } from './ConcreteProcessB.js';

const processA = new ConcreteProcessA();
console.log("=== 执行流程 A ===");
processA.run();

const processB = new ConcreteProcessB();
console.log("=== 执行流程 B ===");
processB.run();
