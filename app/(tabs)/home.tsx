import HomeHeader from "@/components/home/HomeHeader";
import WaterQuality from "@/components/home/WaterQuality";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-background-light flex-1">
      <View className="px-7">
        <HomeHeader />
        <WaterQuality />
        <Text className="mt-7 text-xl font-semibold">Real-Time Readings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
