import { NameRepository } from './NameRepository.js';

const repository = new NameRepository();
const iterator = repository.getIterator();

console.log('遍历名字列表：');
while (iterator.hasNext()) {
  console.log(iterator.next());
}
