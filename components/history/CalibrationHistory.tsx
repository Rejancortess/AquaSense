import { theme } from "@/theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';


const CalibrationHistory = ({isSafe,location,id}: {isSafe: boolean, location: string, id: string}) => {
  return (
      <View
        className="mt-6 gap-5 justify-between rounded-2xl bg-white px-6 py-5"
        style={theme.shadowlight}
      >
        <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-5">
          <View className=" p-2 rounded-lg" style={{backgroundColor: isSafe ? "#d1fae5" : "#fee2e2"}} >
            <Ionicons name="water" size={24} color={isSafe ? "green" : "red"} />
          </View>
          <View>
            <Text className="font-semibold ">{location}</Text>
            <Text className="text-gray-500 ">{id}</Text>
          </View>
        </View>
          <View className="flex-row items-center gap-2 px-3 py-1 rounded-lg" style={{backgroundColor: isSafe ? "#d1fae5" : "#fee2e2"}}>
            <Ionicons name={isSafe ? "checkmark-circle" : "close-circle-sharp"} size={24} color={isSafe ? "green" : "red"} />
            <Text>{isSafe ? "Safe" : "Unsafe"}</Text>
          </View>
            
          </View>
          <View className="flex-row justify-between border-t border-gray-200 py-3 border-dashed">
            <Text className="text-lg text-gray-500">Last Calibrated:</Text>
            <Text className="text-xl font-semibold">July 15,2024</Text>
          </View>
      </View>
  )
}

export default CalibrationHistory