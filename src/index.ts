import { Singleton } from './creational/singleton.js'
import { ConcreteCreatorA } from './creational/factory-method/ConcreteCreatorA.js'
import { ConcreteCreatorB } from './creational/factory-method/ConcreteCreatorB.js'
import { ChinaFruitFactory } from './creational/abstract-factory/ChinaFruitFactory.js'
import { USFruitFactory } from './creational/abstract-factory/USFruitFactory.js'

console.log('=== Singleton 测试 ===')
const a = Singleton.getInstance()
const b = Singleton.getInstance()
console.log('a === b ?', a === b)           // 👉 应该是 true
console.log(a.say())                        // 👉 输出：我是唯一实例

console.log('\n=== Factory Method 测试 ===')
const creatorA = new ConcreteCreatorA()
console.log(creatorA.operation()) // 输出：工厂创建了一个产品 → 使用产品A
const creatorB = new ConcreteCreatorB()
console.log(creatorB.operation()) // 输出：工厂创建了一个产品 → 使用产品B

console.log('\n=== Abstract Factory 测试 ===')
const chinaFactory = new ChinaFruitFactory()
console.log(chinaFactory.createApple().eat())   // 吃的是中国苹果
console.log(chinaFactory.createBanana().eat())  // 吃的是中国香蕉
const usFactory = new USFruitFactory()
console.log(usFactory.createApple().eat())      // 吃的是美国苹果
console.log(usFactory.createBanana().eat())     // 吃的是美国香蕉