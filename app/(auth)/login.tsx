import LoginForm from "@/components/authentication/LoginForm";  
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

const Login = () => {
    return (
        <SafeAreaView className="bg-background-light flex-1 justify-center">
            <View className="px-7">
                <LoginForm />
                <Text className="mt-5 text-center text-gray-600">Login to AquaSense</Text>
            </View>
        </SafeAreaView>
    );
}

export default Login;