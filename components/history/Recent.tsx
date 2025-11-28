import { theme } from '@/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Text, View } from 'react-native'

type RecentProps = {
  isSafe: boolean
  location: string
  id: string
}

const Recent = ({ isSafe, location, id }: RecentProps) => {
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <View className="mt-5 rounded-2xl bg-white p-5 " style={theme.shadowlight}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-5">
          <View
            className={`rounded-lg p-3 ${isSafe ? 'bg-emerald-200' : 'bg-red-200'}`}
          >
            <MaterialIcons
              name="water-drop"
              size={20}
              color={isSafe ? 'green' : 'red'}
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">{location}</Text>
            <Text>ID:{id}</Text>
          </View>
        </View>

        <View
          className={`flex-row items-center gap-1 rounded-full ${isSafe ? 'bg-emerald-200' : 'bg-red-200'} px-3 py-1`}
        >
          <Ionicons
            name={isSafe ? 'checkmark-circle' : 'close-circle'}
            size={20}
            color={isSafe ? 'green' : 'red'}
          />
          <Text className={isSafe ? 'text-emerald-800' : 'text-red-800'}>
            {isSafe ? 'Safe' : 'Unsafe'}
          </Text>
        </View>
      </View>

      <View className="mt-5 flex-row items-center justify-between border-t border-gray-300 pt-3">
        <Text className="text-gray-500">Last calibrated:</Text>
        <Text className="text-lg font-semibold">{getTodayDate()}</Text>
      </View>
    </View>
  )
}

export default Recent
