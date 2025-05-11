import { Component } from './Mediator.js';

export class Button extends Component {
  click() {
    console.log('🔘 Button 被点击');
    this.mediator?.notify(this, 'click');
  }
}

export class TextBox extends Component {
  private value = '预设内容';

  clear() {
    this.value = '';
    console.log('✏️ TextBox 内容已清空');
  }

  setValue(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
