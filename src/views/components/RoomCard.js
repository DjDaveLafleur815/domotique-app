import { Pressable, Text } from 'react-native';

export default function RoomCard({ room, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        padding: 16,
        margin: 8,
        borderRadius: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>{room.icon}</Text>
      <Text style={{ color: 'white', fontSize: 18, marginTop: 10 }}>{room.name}</Text>
      <Text style={{ color: '#94a3b8' }}>{room.devices.length} équipements</Text>
    </Pressable>
  );
}
