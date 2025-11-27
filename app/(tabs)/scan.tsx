import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";

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
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-primary mt-10 flex-row items-center gap-2 rounded-xl px-7 py-4 shadow-md shadow-black"
      >
        <MaterialIcons name="qr-code" size={28} color="white" />
        <Text className="text-xl font-semibold text-white ">Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scan;
