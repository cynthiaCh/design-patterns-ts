import { ChargerAdapter } from "./Adapter";
import { OldCharger } from "./Adaptee";

// 客户端只认识 Charger 接口
const oldCharger = new OldCharger();
const adapter = new ChargerAdapter(oldCharger);

adapter.chargeWithUSB();
// 输出：
// Adapter converts USB to Type-C
// Charging with Type-C (old charger)
