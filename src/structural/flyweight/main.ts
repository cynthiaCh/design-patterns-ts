import { ShapeFactory } from './ShapeFactory.js';

const colors = ['red', 'green', 'blue', 'red', 'green'];

for (let i = 0; i < 10; i++) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const circle = ShapeFactory.getCircle(color);
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  circle.draw(x, y);
}
