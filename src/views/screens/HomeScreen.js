import { FlatList, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import { useDomoticController } from '../../../controllers/domoticController';
import RoomCard from '../components/RoomCard';

export default function HomeScreen({ navigation }) {
  const { getRooms } = useDomoticController();
  const rooms = getRooms();
  const { width } = useWindowDimensions();

  // Responsive : 2 colonnes sur petit écran
  const numColumns = width < 500 ? 2 : 3;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#020617', padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', marginBottom: 10 }}>
        Maison intelligente
      </Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <RoomCard
            room={item}
            onPress={() => navigation.navigate('Room', { roomId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}
