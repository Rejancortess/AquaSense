import Ionicons from "@expo/vector-icons/Ionicons";
import { CameraView } from "expo-camera";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Camera = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="absolute left-5 top-6">
        <Ionicons name="close-circle" size={24} color="black" />
      </View>
      <CameraView
        style={{ flex: 1 }}
        className="relative "
        facing="back"
        onBarcodeScanned={({ data }) => console.log(data)}
      />
    </SafeAreaView>
  );
};

export default Camera;
