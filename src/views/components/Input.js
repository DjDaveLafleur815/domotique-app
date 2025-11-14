import React from "react";
import { TextInput } from "react-native";
import colors from "../../config/colors";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textMuted}
      style={{
        backgroundColor: colors.card,
        color: colors.text,
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
      }}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
