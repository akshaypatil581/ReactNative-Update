import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("Hi Akshay Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="black"
        onPress={() => console.log("Button is clicked")}
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
