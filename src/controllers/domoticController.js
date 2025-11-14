import { useState } from "react";
import { Room } from "../models/Room";
import { Device } from "../models/Device";

const STARTERS = [
  new Room({
    id: "salon",
    name: "Salon",
    icon: "💡",
    devices: [
      new Device({
        id: "light1",
        name: "Lumière principale",
        type: "light",
        isOn: true,
      }),
      new Device({
        id: "temp1",
        name: "Température",
        type: "sensor",
        value: 22,
        unit: "°C",
      }),
    ],
  }),

  new Room({
    id: "chambre",
    name: "Chambre",
    icon: "🛏️",
    devices: [
      new Device({
        id: "light2",
        name: "Lumière plafond",
        type: "light",
        isOn: false,
      }),
      new Device({
        id: "temp2",
        name: "Température",
        type: "sensor",
        value: 20,
        unit: "°C",
      }),
    ],
  }),
];

export function useDomoticController() {
  const [rooms, setRooms] = useState(STARTERS);

  const getRooms = () => rooms;

  const getRoomById = (id) => rooms.find((r) => r.id === id);

  const toggleLight = (roomId, deviceId) => {
    setRooms((old) =>
      old.map((room) =>
        room.id !== roomId
          ? room
          : new Room({
              ...room,
              devices: room.devices.map((d) =>
                d.id !== deviceId
                  ? d
                  : new Device({
                      ...d,
                      isOn: !d.isOn,
                    })
              ),
            })
      )
    );
  };

  return { rooms, getRooms, getRoomById, toggleLight };
}
