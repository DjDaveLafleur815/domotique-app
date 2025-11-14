import React from "react";
import { Pressable, Text } from "react-native";
import colors from "../../config/colors";

export default function Button({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 8,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
        {title}
      </Text>
    </Pressable>
  );
}
