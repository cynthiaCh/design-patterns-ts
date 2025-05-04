import { Camera } from './Camera.js';
import { Sensor } from './Sensor.js';
import { Storage } from './Storage.js';

export class Phone {
  private camera = new Camera();
  private sensor = new Sensor();
  private storage = new Storage();

  takePhoto() {
    console.log('📱 开始拍照流程...');
    this.sensor.activate();
    this.camera.turnOn();
    this.camera.takePicture();
    this.storage.save();
    this.camera.turnOff();
    this.sensor.deactivate();
    console.log('✅ 拍照完成\n');
  }
}
