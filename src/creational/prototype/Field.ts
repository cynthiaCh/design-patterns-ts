// src/creational/prototype/Field.ts
import type { Prototype } from './Prototype.js';

export class Field implements Prototype<Field> {
  type: string;
  label: string;
  required: boolean;
  tooltip?: string;

  constructor(type: string, label: string, required = false, tooltip?: string) {
    this.type = type;
    this.label = label;
    this.required = required;
    this.tooltip = tooltip;
  }

  clone(): Field {
    return new Field(this.type, this.label, this.required, this.tooltip);
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }
}
