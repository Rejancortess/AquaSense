import { theme } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const WaterQuality = () => {
  return (
    <View
      className="mt-10 flex-col items-center rounded-2xl bg-white p-6 text-center "
      style={theme.shadowlight}
    >
      <View
        className="my-2 items-center justify-center gap-2"
        style={{
          borderWidth: 13,
          borderColor: "#05afd1",
          borderRadius: 100,
          width: 150,
          height: 150,
        }}
      >
        <Ionicons name="water-outline" size={40} color="#05afd1" />
        <Text className="text-3xl font-[900]">SAFE</Text>
      </View>
      <Text className="text-md font-medium text-gray-600 ">
        Water Quality Status
      </Text>
    </View>
  );
};

export default WaterQuality;
