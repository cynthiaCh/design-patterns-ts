import { Mediator, Component } from './Mediator.js';
import { Button, TextBox } from './Component.js';

export class DialogMediator implements Mediator {
  constructor(private button: Button, private textBox: TextBox) {
    this.button.setMediator(this);
    this.textBox.setMediator(this);
  }

  notify(sender: Component, event: string): void {
    if (event === 'click') {
      console.log('🧭 按钮点击，中介者通知文本框清空');
      this.textBox.clear();
    }
  }
}
