import { describe, it, expect, vi } from "vitest";
import { OldCharger } from "./Adaptee";
import { ChargerAdapter } from "./Adapter";

describe("Adapter Pattern", () => {
  it("should adapt chargeWithUSB to chargeWithTypeC", () => {
    const oldCharger = new OldCharger();
    const spy = vi.spyOn(oldCharger, "chargeWithTypeC");
    const adapter = new ChargerAdapter(oldCharger);
    adapter.chargeWithUSB();
    expect(spy).toHaveBeenCalled();
  });
});
