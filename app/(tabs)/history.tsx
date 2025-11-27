import Recent from "@/components/history/Recent";
import { ScrollView, Text } from "react-native";

const History = () => {
  return (
    <ScrollView className="bg-background-light flex-1 px-7">
      <Text className="mb-5 mt-5 text-xl font-medium">Recently Calibrated</Text>
      <Recent isSafe={true} location="CITC Building" id="F-CITC01-01" />
      <Recent isSafe={false} location="GYM Lobby" id="F-GYMC01-02" />
    </ScrollView>
  );
};

export default History;
