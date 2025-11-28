import useAuthStore from '@/store/authStore'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
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
import { auth } from '@/backend/firebase'
import { Gradient } from '@/components/ui/Gradient'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  )

  const router = useRouter()
  const { login, isLoggedIn } = useAuthStore()

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/(tabs)/home')
    }
  }, [isLoggedIn, router])

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Enter a valid email address.'

    if (!password.trim()) newErrors.password = 'Password is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignIn = async () => {
    if (!validate()) return

    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      login(user)
    } catch (error: any) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrors({
          email: 'Invalid email or password.',
          password: 'Invalid email or password.',
        })
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
        <View className="items-center flex-1 w-full px-3 mt-10">
          <Image
            source={require('../../assets/images/app-logo.png')}
            style={{ width: 120, height: 120 }}
          />

          <Text className="text-4xl font-bold text-[#1F3137]">AquaSense</Text>
          <Text className="px-6 mt-2 mb-10 text-center text-secondary-dark">
            Welcome back let’s check your campus water quality.
          </Text>

          <View className="items-center w-full p-5 pb-10 bg-white shadow-md rounded-3xl">
            <Text className="text-2xl font-bold text-center text-[#1F3137]">
              Sign In
            </Text>
            <Text className="mt-2 text-[#6B7280]">
              Enter your details to continue
            </Text>

            <View className="w-full mt-10 mb-2">
              <View
                className={`flex-row items-center rounded-xl px-4 py-2 ${
                  errors.email
                    ? 'border border-red-400 bg-red-50'
                    : 'bg-gray-100'
                }`}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={errors.email ? '#DC2626' : '#9CA3AF'}
                />
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 h-12 px-3 text-gray-800"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text)
                    if (errors.email) setErrors({ ...errors, email: undefined })
                  }}
                />
              </View>
              {errors.email && (
                <Text className="mt-1 text-sm text-red-500">
                  {errors.email}
                </Text>
              )}
            </View>

            <View className="w-full mt-3 mb-2">
              <View
                className={`flex-row items-center rounded-xl px-4 py-2 ${
                  errors.password
                    ? 'border border-red-400 bg-red-50'
                    : 'bg-gray-100'
                }`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={errors.password ? '#DC2626' : '#9CA3AF'}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 h-12 px-3 text-gray-800"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text)
                    if (errors.password)
                      setErrors({ ...errors, password: undefined })
                  }}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#9CA3AF"
                  />
                </Pressable>
              </View>
              {errors.password && (
                <Text className="mt-1 text-sm text-red-500">
                  {errors.password}
                </Text>
              )}
            </View>

            <Pressable onPress={() => {}} className="self-end mt-2">
              <Text className="text-sm font-medium">Forgot your password?</Text>
            </Pressable>

            <Pressable
              onPress={handleSignIn}
              className="w-full mt-5 shadow-md shadow-black"
            >
              <Gradient borderRadius={30}>
                <View className="items-center justify-center w-lg h-14">
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text className="font-bold text-white">Sign In</Text>
                  )}
                </View>
              </Gradient>
            </Pressable>

            <Pressable
              onPress={() => router.push('/(auth)/signUp')}
              className="w-full"
            >
              <View className="flex-row items-center justify-center w-full mt-8">
                <Text className="text-secondary-light">
                  Don&apos;t have an account?{' '}
                </Text>
                <Text className="font-medium text-[#7353B9]">Sign Up</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default SignIn
