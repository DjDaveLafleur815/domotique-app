import React from "react";
import { View, Text, Switch } from "react-native";
import colors from "../../config/colors";

export default function DeviceTile({ device, onToggle }) {
  return (
    <View
      style={{
        backgroundColor: colors.card,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ color: colors.text, fontSize: 16 }}>{device.name}</Text>

        {device.type === "sensor" && (
          <Text style={{ color: colors.textMuted }}>
            {device.value} {device.unit}
          </Text>
        )}
      </View>

      {device.type === "light" && (
        <Switch value={device.isOn} onValueChange={onToggle} />
      )}
    </View>
  );
}
