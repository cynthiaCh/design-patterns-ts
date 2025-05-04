import { Component } from './Component.js';

export class File implements Component {
  constructor(private name: string) {}

  show(indent: string = ''): void {
    console.log(`${indent}📄 ${this.name}`);
  }
}
