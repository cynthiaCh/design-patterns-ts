// src/structural/proxy/main.ts
import { ProxyImage } from './ProxyImage.js';

const image = new ProxyImage('test_photo.jpg');

console.log('第一次调用 display()');
image.display();

console.log('第二次调用 display()');
image.display();
