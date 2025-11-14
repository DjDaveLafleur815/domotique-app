import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/screens/HomeScreen';
import RoomScreen from './src/views/screens/RoomScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#020617' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Domotique' }} />
        <Stack.Screen name="Room" component={RoomScreen} options={{ title: 'Pièce' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
