import React from "react";
import { Text } from "react-native";
import colors from "../../config/colors";

export default function SectionTitle({ children }) {
  return (
    <Text style={{ color: colors.text, fontSize: 20, fontWeight: "700", marginVertical: 10 }}>
      {children}
    </Text>
  );
}
