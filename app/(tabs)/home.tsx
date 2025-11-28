import HomeHeader from '@/components/home/HomeHeader'
import LastCalibration from '@/components/home/LastCalibration'
import Readings from '@/components/home/Readings'
import WaterQuality from '@/components/home/WaterQuality'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <View className="px-7">
        <HomeHeader />
        <WaterQuality />
        <Text className="text-xl font-semibold mt-7">Real-Time Readings</Text>
        <Readings />
        <LastCalibration />
        <TouchableOpacity
          onPress={() => router.push('/report')}
          activeOpacity={0.8}
          className="items-center py-4 mt-10 shadow-md bg-primary rounded-xl shadow-black"
        >
          <Text className="text-lg font-semibold text-white">
            Report an Issue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
