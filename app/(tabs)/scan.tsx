import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useCameraPermissions } from 'expo-camera'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
const Scan = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const isPermissionGranted = Boolean(permission?.granted)

  const handleCamera = () => {
    if (!isPermissionGranted) {
      requestPermission()
    } else {
      router.push('/camera')
    }
  }

  return (
    <View className="items-center justify-center flex-1 bg-background-light px-7">
      <Text className="mb-4 text-4xl font-bold text-center">
        Scan to Check Water Quality{' '}
      </Text>
      <Text className="text-lg text-center text-gray-600">
        Point your camera at the QR code on the drinking fountain to get instant
        water quality information.{' '}
      </Text>
      <TouchableOpacity
        disabled={!isPermissionGranted}
        activeOpacity={0.8}
        onPress={handleCamera}
        className="flex-row items-center gap-2 py-4 mt-10 shadow-md bg-primary rounded-xl px-7 shadow-black"
      >
        <MaterialIcons name="qr-code" size={28} color="white" />
        <Text className="text-xl font-semibold text-white ">Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Scan
