import { useOnboarding } from '@/store/useOnboarding'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const router = useRouter()

  const finishOnboarding = useOnboarding((s) => s.finishOnboarding)

  const handleFinishOnboarding = async () => {
    await finishOnboarding()
    router.push('/(auth)/signIn')
  }

  return (
    <View className="items-center justify-center flex-1 px-10 bg-background-light">
      <Image
        source={require('@/assets/images/app-logo.png')}
        className="mb-10 h-60 w-60"
        resizeMode="contain"
      />
      <View className="items-center gap-3">
        <Text className="text-3xl font-bold">Welcome to AquaSense</Text>
        <Text className="text-lg text-center text-gray-600">
          Bringing clear data, smart monitoring, and peace of mind to every drop
          of water on campus.
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleFinishOnboarding}
        className="absolute items-center w-full py-4 shadow-md bg-primary bottom-20 rounded-xl px-7 shadow-black"
      >
        <Text className="text-xl font-semibold text-white">Get started</Text>
      </TouchableOpacity>
    </View>
  )
}
