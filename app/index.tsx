import "../global.css"
import { Button, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function Index() {
  return (
    <View className="flex-1 relative">
      <ImageBackground
        source={require("../assets/images/homeImage.png")}
        className="w-full h-[65%] justify-end"
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <LinearGradient
          colors={["transparent", "#050505"]}
          style={{ height: "5%", width: "100%" }}
        />
      </ImageBackground>

      {/* Bottom content */}
      <View className="flex-1 bg-[#050505] px-5 ">
        <View className="flex items-center -mt-14">
          <Text className="text-[38px] text-center font-semibold text-white">
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text className="text-[#A2A2A2] text-base w-[95%] text-center mt-2">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>
        <Pressable
          className="mt-10 h-14 items-center justify-center rounded-2xl bg-[#C67C4E]"
          accessibilityRole="button"
          accessibilityLabel="Get Started"
        >
          <Text className="text-base font-semibold text-white">
            Get Started
          </Text>
        </Pressable>
      </View>





    </View>
  );
}