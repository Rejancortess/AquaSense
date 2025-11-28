import { Gradient } from '@/components/ui/Gradient'
import { auth } from '@/backend/firebase'
import useAuthStore from '@/store/authStore'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Image } from 'expo-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{
    username?: string
    email?: string
    password?: string
  }>({})
  const router = useRouter()
  const { login, isLoggedIn } = useAuthStore()

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/(tabs)/home')
    }
  }, [isLoggedIn, router])

  const validate = () => {
    const newErrors: { username?: string; email?: string; password?: string } =
      {}

    if (!username.trim()) newErrors.username = 'Username is required.'
    if (!email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Enter a valid email address.'
    if (!password.trim()) newErrors.password = 'Password is required.'
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignUp = async () => {
    if (!validate()) return

    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      await updateProfile(user, {
        displayName: username,
      })

      login(user)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrors({ email: 'This email is already registered.' })
      } else {
        alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <KeyboardAwareScrollView
        className="flex-1"
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 100}
        contentContainerStyle={{
          paddingTop: 24,
          paddingHorizontal: 24,
        }}
      >
        <View className="items-center flex-1 w-full mt-20">
          <Image
            source={require('../../assets/images/app-logo.png')}
            style={{ width: 120, height: 120 }}
          />
          <Text className="w-full text-4xl font-bold text-center text-[#1F3137]">
            Join Now
          </Text>
          <Text className="px-6 mt-2 mb-5 text-center text-secondary-dark">
            Begin your path to water awareness
          </Text>

          <View className="w-full px-8 mt-8">
            <Text className="font-medium text-[#1F3137]">Username</Text>
            <View
              className={`mb-5 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.username ? 'border border-red-400 bg-red-50' : 'bg-white'
              }`}
            >
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="#ADAEBC"
                className="flex-1 h-12 px-3 text-gray-800"
                value={username}
                onChangeText={(text) => {
                  setUsername(text)
                  if (errors.username)
                    setErrors({ ...errors, username: undefined })
                }}
              />
              <Ionicons
                name="person"
                size={20}
                color={errors.username ? '#DC2626' : '#9CA3AF'}
              />
            </View>
            {errors.username && (
              <Text className="mb-2 text-sm text-red-500">
                {errors.username}
              </Text>
            )}

            <Text className="font-medium text-[#1F3137]">Email Address</Text>
            <View
              className={`mb-5 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.email ? 'border border-red-400 bg-red-50' : 'bg-white'
              }`}
            >
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#ADAEBC"
                className="flex-1 h-12 px-3 text-gray-800"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => {
                  setEmail(text)
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
              />
              <Ionicons
                name="mail"
                size={20}
                color={errors.email ? '#DC2626' : '#9CA3AF'}
              />
            </View>
            {errors.email && (
              <Text className="mb-2 text-sm text-red-500">{errors.email}</Text>
            )}

            <Text className="font-medium text-[#1F3137]">Password</Text>
            <View
              className={`mb-1 mt-2 flex-row items-center rounded-2xl px-4 py-2 shadow-md ${
                errors.password ? 'border border-red-400 bg-red-50' : 'bg-white'
              }`}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#ADAEBC"
                secureTextEntry={!showPassword}
                className="flex-1 h-12 px-3 text-gray-800"
                value={password}
                onChangeText={(text) => {
                  setPassword(text)
                  if (errors.password)
                    setErrors({ ...errors, password: undefined })
                }}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
            {errors.password && (
              <Text className="mb-2 text-sm text-red-500">
                {errors.password}
              </Text>
            )}

            <Pressable onPress={handleSignUp} className="w-full mt-5">
              <Gradient
                className="w-full shadow-md shadow-black"
                borderRadius={30}
              >
                <View className="items-center justify-center w-lg h-14">
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text className="font-bold text-white">Create Account</Text>
                  )}
                </View>
              </Gradient>
            </Pressable>

            <Pressable onPress={() => router.back()} className="w-full">
              <View className="flex-row items-center justify-center w-full mt-5">
                <Text className="text-secondary-light">
                  Already have an account?
                </Text>
                <Text className="font-medium text-[#7353B9]"> Sign In</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default SignUp
