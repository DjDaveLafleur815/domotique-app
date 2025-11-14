// src/models/homeModel.js

// Données de test (plus tard : API FastAPI / Home Assistant)
export const initialRooms = [
  {
    id: 'salon',
    name: 'Salon',
    icon: '💡',
    devices: [
      { id: 'light1', name: 'Lumière principale', type: 'light', isOn: true },
      { id: 'temp1', name: 'Température', type: 'sensor', value: 22, unit: '°C' },
    ],
  },
  {
    id: 'chambre',
    name: 'Chambre',
    icon: '🛏️',
    devices: [
      { id: 'light2', name: 'Lumière plafond', type: 'light', isOn: false },
      { id: 'temp2', name: 'Température', type: 'sensor', value: 20, unit: '°C' },
    ],
  },
  {
    id: 'cuisine',
    name: 'Cuisine',
    icon: '🍽️',
    devices: [
      { id: 'light3', name: 'Éclairage plan de travail', type: 'light', isOn: true },
      { id: 'temp3', name: 'Température', type: 'sensor', value: 21, unit: '°C' },
    ],
  },
];
