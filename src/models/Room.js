export class Room {
  constructor({ id, name, icon, devices }) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.devices = devices || [];
  }
}
