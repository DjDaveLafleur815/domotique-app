import React from "react";
import { Pressable, Text } from "react-native";
import colors from "../../config/colors";

export default function RoomCard({ room, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: colors.card,
        padding: 18,
        margin: 8,
        borderRadius: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>{room.icon}</Text>
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: "600", marginTop: 10 }}>
        {room.name}
      </Text>
      <Text style={{ color: colors.textMuted, marginTop: 4 }}>
        {room.devices.length} équipements
      </Text>
    </Pressable>
  );
}
