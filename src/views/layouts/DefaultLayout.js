import React from "react";
import { SafeAreaView } from "react-native";
import colors from "../../config/colors";

export default function DefaultLayout({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, padding: 16 }}>
      {children}
    </SafeAreaView>
  );
}
