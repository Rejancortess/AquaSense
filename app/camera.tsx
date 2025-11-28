import { CameraView } from "expo-camera";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Camera = () => {
  const [scannedData, setScannedData] = React.useState<string | null>(null);
  const [scanning, setScanning] = React.useState(true);

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (!scanning) return;
    setScannedData(data);
    setScanning(false);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1 }}>
      {scanning && (
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={handleBarcodeScanned}
        />
      )}

      {scanning && (
        <View className="absolute inset-0 items-center justify-center">
          <View className="absolute inset-0 bg-black/40" />

          <View className="h-64 w-64">
            <View className="absolute left-0 top-0 h-8 w-8 border-l-4 border-t-4 border-white" />
            <View className="absolute right-0 top-0 h-8 w-8 border-r-4 border-t-4 border-white" />
            <View className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-white" />
            <View className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-white" />
          </View>

          <Text className="absolute bottom-24 text-2xl text-white">
            Scan QR Code
          </Text>
        </View>
      )}
    </View>
  );
};

export default Camera;
