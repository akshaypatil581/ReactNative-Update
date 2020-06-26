import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Hi Akshay Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React
      </Text>
      <TouchableNativeFeedback>
        <View
          style={{ height: 100, width: 300, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/1027/200/300",
          }}
        /> */
}
