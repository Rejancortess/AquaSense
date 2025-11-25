import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type OnboardingState = {
  hasSeenOnboarding: boolean;
  loading: boolean;
  loadOnboardingStatus: () => Promise<void>;
  finishOnboarding: () => Promise<void>;
  resetOnboarding: () => Promise<void>;
};

export const useOnboarding = create<OnboardingState>(set => ({
  hasSeenOnboarding: false,
  loading: true,

  loadOnboardingStatus: async () => {
    const value = await AsyncStorage.getItem("hasSeenOnboarding");
    set({ hasSeenOnboarding: value === "true", loading: false });
  },

  finishOnboarding: async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    set({ hasSeenOnboarding: true });
  },

  resetOnboarding: async () => {
    await AsyncStorage.removeItem("hasSeenOnboarding");
    set({ hasSeenOnboarding: false });
  },
}));
