import { Image } from './Image.js';
import { RealImage } from './RealImage.js';

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  public display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}
