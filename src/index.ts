import { Singleton } from './creational/singleton.js'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('a === b ?', a === b)           // 👉 应该是 true
console.log(a.say())                        // 👉 输出：我是唯一实例
