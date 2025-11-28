import { CameraView } from 'expo-camera'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Camera = () => {
  const [scanning, setScanning] = React.useState(true)

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (!scanning) return
    setScanning(false)
    router.replace('/home')
  }

  return (
    <View style={{ flex: 1 }}>
      {scanning && (
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={handleBarcodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        />
      )}

      {scanning && (
        <View className="absolute inset-0 items-center justify-center">
          <View className="absolute inset-0 bg-black/40" />

          <View className="w-64 h-64">
            <View className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white" />
            <View className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white" />
            <View className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white" />
            <View className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white" />
          </View>

          <Text className="absolute text-2xl text-white bottom-24">
            Scan QR Code
          </Text>
        </View>
      )}
    </View>
  )
}

export default Camera
