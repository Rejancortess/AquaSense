import Entypo from "@expo/vector-icons/Entypo";
import { CameraView } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Report = () => {
  const [showCamera, setShowCamera] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"list" | "scan">("list");
  const [selectedProblem, setSelectedProblem] = React.useState<string | null>(
    null
  );
  const [photo, setPhoto] = React.useState<string | null>(null);

  const handleCameraPress = () => {
    setActiveTab("scan");
    setShowCamera(true);
  };

  const fountainProblems = [
    "Leaking",
    "No Water Flow",
    "Unusual Taste",
    "Discoloration",
    "Strange Odor",
    "Other",
  ];

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permissions are required.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView className="bg-background-light flex-1 px-6">
        <Text className="mt-10 text-2xl font-bold">Which Fountain?</Text>

        <View className="mt-5 flex-row items-center justify-between rounded-full bg-gray-200 p-1">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setActiveTab("list");
              setShowCamera(false);
            }}
            className={`w-[50%] items-center rounded-xl py-2 ${
              activeTab === "list" ? "bg-white" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-medium ${
                activeTab === "list" ? "text-black" : "text-gray-500"
              }`}
            >
              Select from List
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleCameraPress}
            className={`w-[50%] items-center rounded-xl py-2 ${
              activeTab === "scan" ? "bg-white" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-medium ${
                activeTab === "scan" ? "text-black" : "text-gray-500"
              }`}
            >
              Scan QR Code
            </Text>
          </TouchableOpacity>
        </View>

        {showCamera ? (
          <View className="mt-6 h-[400px]  overflow-hidden rounded-xl border border-gray-500">
            <CameraView style={{ flex: 1 }} />
            <View className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2">
              <View className="absolute left-0 top-0 h-8 w-8 border-l-4 border-t-4 border-white" />
              <View className="absolute right-0 top-0 h-8 w-8 border-r-4 border-t-4 border-white" />
              <View className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-white" />
              <View className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-white" />
            </View>
          </View>
        ) : (
          <>
            <TextInput
              className="mt-7 rounded-full border border-gray-300 px-5 py-4"
              placeholder="e.g., Building A, Floor 2"
            />

            <Text className="mt-10 text-2xl font-semibold">
              Whats the Problem?
            </Text>

            <View className="flex-row flex-wrap gap-2">
              {fountainProblems.map(problem => (
                <TouchableOpacity
                  key={problem}
                  activeOpacity={0.8}
                  className={` mt-4 rounded-full border px-4 py-2 ${
                    selectedProblem === problem
                      ? "border-primary bg-primary/20"
                      : "border-gray-300 bg-white"
                  }`}
                  onPress={() => setSelectedProblem(problem)}
                >
                  <Text
                    className={`text-md text-gray-600 ${selectedProblem === problem ? "font-medium" : "font-normal"}`}
                  >
                    {problem}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              className="mt-7 rounded-lg border border-gray-300 px-5 py-4 text-lg"
              placeholder="Additional details (optional)"
              multiline
              numberOfLines={4}
              style={{ height: 120, textAlignVertical: "top" }}
            />

            <Text className="mt-5 text-2xl font-semibold "> Add a Photo</Text>
            <TouchableOpacity
              onPress={openCamera}
              className="mt-3 items-center justify-center gap-2 rounded-xl border border-dashed border-gray-400"
              style={{ height: 170 }}
              activeOpacity={0.7}
            >
              {photo ? (
                <Image
                  source={{ uri: photo }}
                  style={{ width: "100%", height: "100%", borderRadius: 12 }}
                />
              ) : (
                <>
                  <Entypo name="camera" size={30} color="black" />
                  <Text className="text-lg text-gray-500">
                    Tap to upload an image
                  </Text>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-primary mb-10 mt-10 items-center rounded-xl py-4 shadow-md shadow-black"
            >
              <Text className="text-lg font-semibold text-white">
                Report an Issue
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Report;
