import HomeHeader from "@/components/home/HomeHeader";
import LastCalibration from "@/components/home/LastCalibration";
import Readings from "@/components/home/Readings";
import WaterQuality from "@/components/home/WaterQuality";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-background-light flex-1">
      <View className="px-5">
        <HomeHeader />
        <WaterQuality />
        <Text className="mt-7 text-xl font-semibold">Real-Time Readings</Text>
        <Readings />
        <LastCalibration />
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-primary mt-10 items-center rounded-xl py-4 shadow-md shadow-black"
        >
          <Text className="text-lg font-semibold text-white">
            Report an Issue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
