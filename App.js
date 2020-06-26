import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Hi Akshay Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello Akshay! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odit hic ex quod obcaecati cupiditate, autem asperiores commodi ab eaque
        in minus magnam fugiat amet illum voluptatum perspiciatis ipsum.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
