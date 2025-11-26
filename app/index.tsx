import { useOnboarding } from "@/store/useOnboarding";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  const finishOnboarding = useOnboarding(s => s.finishOnboarding);

  const handleFinishOnboarding = async () => {
    await finishOnboarding();
    router.push("/(tabs)/home");
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={handleFinishOnboarding}>Get started</Button>
    </View>
  );
}
