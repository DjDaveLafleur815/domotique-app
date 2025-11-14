import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useDomoticController } from '../../../controllers/domoticController';
import DeviceTile from '../components/DeviceTile';

export default function RoomScreen({ route }) {
  const { roomId } = route.params;
  const { getRoomById, toggleLight } = useDomoticController();
  const room = getRoomById(roomId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#020617' }}>
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ color: 'white', fontSize: 26, marginBottom: 10 }}>
          {room.icon} {room.name}
        </Text>

        {room.devices.map((d) => (
          <DeviceTile
            key={d.id}
            device={d}
            onToggle={() => toggleLight(room.id, d.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
