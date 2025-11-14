// src/controllers/domoticController.js
import { useState } from 'react';
import { initialRooms } from '../models/homeModel';

// Hook contrôleur qui gère la logique domotique (MVC)
export function useDomoticController() {
  const [rooms, setRooms] = useState(initialRooms);

  // Obtenir toutes les pièces
  const getRooms = () => rooms;

  // Obtenir une pièce par son ID
  const getRoomById = (id) => rooms.find((room) => room.id === id);

  // Allumer / éteindre une lumière
  const toggleLight = (roomId, deviceId) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id !== roomId
          ? room
          : {
              ...room,
              devices: room.devices.map((d) =>
                d.id === deviceId
                  ? { ...d, isOn: !d.isOn }
                  : d
              ),
            }
      )
    );
  };

  return {
    rooms,
    getRooms,
    getRoomById,
    toggleLight,
  };
}
