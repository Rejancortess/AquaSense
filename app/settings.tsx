import { useOnboarding } from "@/store/useOnboarding";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const [toggle, setToggle] = React.useState(false);
  const resetOnboarding = useOnboarding(s => s.resetOnboarding);

  const router = useRouter();
  const handleLogout = () => {
    resetOnboarding();
    router.replace("/");
  };
  return (
    <View className="bg-background-light flex-1 px-7">
      <View className="mt-10 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-5">
        <View className="flex-row gap-3">
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text className="text-xl">Turn on Notifications</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setToggle(!toggle)}
        >
          <Fontisto
            name={toggle ? "toggle-on" : "toggle-off"}
            size={35}
            color={toggle ? "#00A9E0" : "gray"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleLogout}
        className="items-center"
      >
        <Text className="text-red mt-20 text-xl font-semibold  text-[#E53E3E]">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
