import React from "react";
import { View, Text } from "react-native";
import colors from "../../config/colors";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>
        Paramètres (à implémenter)
      </Text>
    </View>
  );
}
