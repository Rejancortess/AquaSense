import CalibrationHistory from "@/components/history/CalibrationHistory";
import React from "react";
import { Text, View } from "react-native";

const History = () => {
  return (
    <View className="px-5 bg-background-light">
      <Text className="text-left mt-2 p-2"style={{ fontWeight: "bold", fontSize: 18 }}>
              Recently Calibrated
            </Text>
        <CalibrationHistory isSafe={true} location="CITC Building First Floor" id="F-CITC01-01"/>
        <CalibrationHistory isSafe={false} location="DRER Memorial Hall" id="F-DRER01-01"/>
        <CalibrationHistory isSafe={true} location="Science Complex" id="F-SCI01-01"/>
        <CalibrationHistory isSafe={true} location="CEA Building First Floor" id="F-CEA01-01"/>
    </View>
  );
};

export default History;
