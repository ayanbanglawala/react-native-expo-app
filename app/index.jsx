import { Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Edit app/index.tsx to edit this screen.
      </Text>
        <Link href="/profile">Click to profile</Link>
    </View>
  );
}
