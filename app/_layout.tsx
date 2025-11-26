import { useOnboarding } from "@/store/useOnboarding";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function RootLayout() {
  const { loading, hasSeenOnboarding } = useOnboarding();
  const loadOnboarding = useOnboarding(state => state.loadOnboardingStatus);

  React.useEffect(() => {
    loadOnboarding();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Welcome to the App tabs",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="(tabs)/home"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
