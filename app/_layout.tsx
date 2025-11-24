import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
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
