import React from "react";
import { SafeAreaView, Text, FlatList, useWindowDimensions } from "react-native";
import { useDomoticController } from "../../controllers/domoticController";
import RoomCard from "../components/RoomCard";
import colors from "../../config/colors";

export default function HomeScreen({ navigation }) {
  const { getRooms } = useDomoticController();
  const rooms = getRooms();
  const { width } = useWindowDimensions();

  const numColumns = width < 500 ? 2 : 3;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, padding: 16 }}>
      <Text style={{ color: colors.text, fontSize: 26, fontWeight: "700", marginBottom: 20 }}>
        Maison intelligente
      </Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <RoomCard
            room={item}
            onPress={() => navigation.navigate("Room", { roomId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}
