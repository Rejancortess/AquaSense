import { theme } from "@/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Text, View } from "react-native";

const Readings = () => {
  return (
    <View
      className="mt-6 flex-row items-center justify-between rounded-2xl bg-white px-4 py-5"
      style={theme.shadowlight}
    >
      <View className="flex-row items-center gap-5">
        <View className="rounded-lg bg-sky-200 p-3">
          <FontAwesome5 name="water" size={20} color="#05afd1" />
        </View>
        <View>
          <Text className="font-semibold ">Turbidity</Text>
          <Text className="text-gray-500 ">Clarity Level</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <Text className="text-primary text-xl font-semibold">0.2</Text>
        <Text className="text-gray-500">NTU</Text>
      </View>
    </View>
  );
};

export default Readings;
