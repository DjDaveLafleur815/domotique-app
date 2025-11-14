export class Device {
  constructor({ id, name, type, isOn, value, unit }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.isOn = isOn || false;
    this.value = value || null;
    this.unit = unit || null;
  }
}
