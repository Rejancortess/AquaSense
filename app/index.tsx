import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={() => router.push("/(tabs)/home")}>Get started</Button>
    </View>
  );
}
