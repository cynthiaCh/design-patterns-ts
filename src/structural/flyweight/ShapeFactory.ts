import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

const circleMap: Map<string, Circle> = new Map();

export class ShapeFactory {
  static getCircle(color: string): Shape {
    if (!circleMap.has(color)) {
      console.log(`Creating a new ${color} circle`);
      circleMap.set(color, new Circle(color));
    }
    return circleMap.get(color)!;
  }
}
