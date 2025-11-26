import { useOnboarding } from "@/store/useOnboarding";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
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
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        {hasSeenOnboarding ? (
          <Stack.Screen
            name="/"
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name="settings"
          options={{
            headerTitle: "Settings",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
          }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{
            headerTitle: "User Login",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
          }}
        />
      </Stack>
    </>
  );
}
