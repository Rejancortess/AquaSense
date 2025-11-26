import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const TabLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#05afd1",
        tabBarStyle: {
          paddingBottom: 5,
          height: 90,
          paddingTop: 5,
          elevation: 0,
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerTitle: "AquaSense",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f9f9f9",
          },
          headerTitleStyle: {
            fontWeight: "semibold",
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/settings")}
              className="mr-5"
            >
              <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerTitle: "Calibration History",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={router.back}
              className="ml-5"
            >
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
