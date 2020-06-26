import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Hello");

  return (
    <View style={styles.container}>
      <Text>Hello Akshay!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
