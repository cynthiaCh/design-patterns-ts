import { Charger } from "./Target";
import { OldCharger } from "./Adaptee";

// 通过继承或组合的方式进行适配（这里用组合更常见）
export class ChargerAdapter implements Charger {
  private oldCharger: OldCharger;

  constructor(oldCharger: OldCharger) {
    this.oldCharger = oldCharger;
  }

  chargeWithUSB(): void {
    console.log("Adapter converts USB to Type-C");
    this.oldCharger.chargeWithTypeC();
  }
}
