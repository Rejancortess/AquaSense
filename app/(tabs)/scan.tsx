import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Scan = () => {
  return (
    <SafeAreaView className="flex-1 bg-light justify-center align-center">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-semibold items-center font-">Scan to Check Water{"\n"}            Quality</Text>
        <Text className="text-gray-500 ml-12 mr-9 mt-3">    Point your camera at the QR code on the drinking fountain to get a instant water quality {"\n"}                            information.</Text>
        <TouchableOpacity className="mt-10 bg-[#05afd1] px-6 py-3 rounded-lg flex-row items-center gap-3">
          <MaterialIcons name="qr-code-scanner" size={24} color="white" />
          <Text className="text-white font-semibold text-lg">Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Scan;
