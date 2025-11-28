import useAuthStore from '@/store/authStore'
import { auth } from '@/backend/firebase'
import Fontisto from '@expo/vector-icons/Fontisto'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Settings = () => {
  const [toggle, setToggle] = React.useState(false)
  const { logout, isLoggedIn } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/(auth)/signIn')
    }
  }, [isLoggedIn, router])

  const handleLogout = async () => {
    try {
      await auth.signOut()
      logout()
    } catch (error) {
      console.error('Error signing out: ', error)
    }
  }

  return (
    <View className="bg-background-light flex-1 px-7">
      <View className="mt-10 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-5">
        <View className="flex-row gap-3">
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text className="text-xl">Turn on Notifications</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setToggle(!toggle)}
        >
          <Fontisto
            name={toggle ? 'toggle-on' : 'toggle-off'}
            size={35}
            color={toggle ? '#00A9E0' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleLogout}
        className="items-center"
      >
        <Text className="text-red mt-20 text-xl font-semibold  text-[#E53E3E]">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings
