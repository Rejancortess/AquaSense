import { CameraView } from "expo-camera";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Report = () => {
  const [showCamera, setShowCamera] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"list" | "scan">("list");

  const handleCameraPress = () => {
    setActiveTab("scan");
    setShowCamera(true);
  };

  return (
    <View className="bg-background-light flex-1 px-6">
      <Text className="mt-10 text-xl font-bold">Which Fountain?</Text>

      <View className="mt-5 flex-row items-center justify-between rounded-full bg-gray-200 p-1">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setActiveTab("list");
            setShowCamera(false);
          }}
          className={`w-[50%] items-center rounded-xl py-2 ${
            activeTab === "list" ? "bg-white" : "bg-transparent"
          }`}
        >
          <Text
            className={`font-medium ${
              activeTab === "list" ? "text-black" : "text-gray-500"
            }`}
          >
            Select from List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleCameraPress}
          className={`w-[50%] items-center rounded-xl py-2 ${
            activeTab === "scan" ? "bg-white" : "bg-transparent"
          }`}
        >
          <Text
            className={`font-medium ${
              activeTab === "scan" ? "text-black" : "text-gray-500"
            }`}
          >
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>

      {showCamera && (
        <View className="mt-6 h-[70%] overflow-hidden rounded-xl">
          <CameraView style={{ flex: 1 }} />
          <View className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2">
            <View className="absolute left-0 top-0 h-8 w-8 border-l-4 border-t-4 border-white" />
            <View className="absolute right-0 top-0 h-8 w-8 border-r-4 border-t-4 border-white" />
            <View className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-white" />
            <View className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-white" />
          </View>
        </View>
      )}
    </View>
  );
};

export default Report;
