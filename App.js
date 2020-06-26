import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Hi Akshay Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React
      </Text>
      <Image
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/id/1027/200/300",
        }}
      />
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
