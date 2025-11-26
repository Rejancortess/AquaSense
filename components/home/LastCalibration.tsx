import { theme } from "@/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Text, View } from "react-native";

const LastCalibration = () => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

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
      <Text className="text-lg font-semibold">{getTodayDate()}</Text>
    </View>
  );
};

export default LastCalibration;
