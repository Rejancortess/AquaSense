import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'
import '../global.css'

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)/home" />
        <Stack.Screen name="(auth)/signIn" />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: true,
            headerTitle: 'Settings',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#f9f9f9' },
          }}
        />
        <Stack.Screen
          name="report"
          options={{
            headerShown: true,
            headerTitle: 'Report an Issue',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#f9f9f9' },
          }}
        />
      </Stack>
    </>
  )
}
