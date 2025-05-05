import { Shape } from './Shape.js';

export class Circle implements Shape {
  constructor(private color: string) {}

  draw(x: number, y: number): void {
    console.log(`Draw a ${this.color} circle at (${x}, ${y})`);
  }
}
