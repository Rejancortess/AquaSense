import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";

const Scan = () => {
  return (
    <View className="bg-background-light flex-1 items-center justify-center px-7">
      <Text className="mb-4 text-center text-4xl font-bold">
        Scan to Check Water Quality{" "}
      </Text>
      <Text className="text-center text-lg text-gray-600">
        Point your camera at the QR code on the drinking fountain to get instant
        water quality information.{" "}
      </Text>
      <View>
        <MaterialIcons name="qr-code" size={24} color="black" />
      </View>
    </View>
  );
};

export default Scan;
