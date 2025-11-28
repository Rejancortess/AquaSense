import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Text, View } from 'react-native'

const HomeHeader = () => {
  return (
    <View className="mt-5 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Ionicons name="water-outline" size={30} color="#05afd1" />
        <Text className="text-xl font-semibold">AquaSense</Text>
      </View>
      <MaterialIcons name="wifi" size={24} color="black" />
    </View>
  )
}

export default HomeHeader
