import { Image, ScrollView, Text, View } from "react-native";
import "../global.css";
import { Link, SplashScreen, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants"
import CustomButton from "../components/CustomButton"

SplashScreen.preventAutoHideAsync();
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full px-4 items-center min-h-[85px] px-4">
          <Image source={images.logo} className="w-[130px] h-[83px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w--[380px] w-full h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center"> Discover Endless Possibilities with {" "}
              <Text className="text-secondary-200">Aura</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />


          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"> Where creativity meets innovation: embark on a journey of limitless exploration with Aura!</Text>
          <CustomButton title="Continue with Email " handlePress={()=>{ router.push("/sign-in")}} containerStyle="w-full mt-7"/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
