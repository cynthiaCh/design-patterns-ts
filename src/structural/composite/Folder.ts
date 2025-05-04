import { Component } from './Component.js';

export class Folder implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(child: Component): void {
    this.children.push(child);
  }

  show(indent: string = ''): void {
    console.log(`${indent}📁 ${this.name}`);
    for (const child of this.children) {
      child.show(indent + '  ');
    }
  }
}
