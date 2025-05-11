import { Button, TextBox } from './Component.js';
import { DialogMediator } from './ConcreteMediator.js';

const button = new Button();
const textBox = new TextBox();

new DialogMediator(button, textBox);

console.log('初始 TextBox 内容：', textBox.getValue());
button.click();
console.log('点击后 TextBox 内容：', textBox.getValue());
