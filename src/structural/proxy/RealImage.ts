import { Image } from './Image.js';

export class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading ${this.filename} from disk...`);
  }

  public display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}
