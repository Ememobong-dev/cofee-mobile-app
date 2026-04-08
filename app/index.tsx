import "../global.css"
import { Button, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function Index() {
  return (
    <View className="flex-1 bg-red-300">
      <ImageBackground
        source={require("../assets/images/homeImage.png")}
        className="w-full h-[65%] justify-end"
        resizeMode="cover"
      >
        {/* Gradient overlay */}
        <LinearGradient
          colors={["transparent", "#050505"]}
          style={{ height: "55%", width: "100%" }}
        />
      </ImageBackground>

      {/* Bottom content */}
      <View className="flex-1 bg-[#050505] px-10 ">
        <View className="flex items-center">
          <Text className="text-3xl text-center font-semibold text-white">
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text className="text-[#A2A2A2] w-[90%] text-center mt-2">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>
        <Pressable className="mt-10 py-2 text-white rounded-2xl bg-[#C67C4E]">
          <Button title="Get Started" color="white" />

        </Pressable>
      </View>





    </View>
  );
}