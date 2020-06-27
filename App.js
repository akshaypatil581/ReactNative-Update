import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("Hi Akshay Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="black"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
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
  //   <Button
  //   title="Click Me"
  //   color="black"
  //   onPress={() =>
  //     Alert.alert("Button Tapped", "M message", [
  //       { text: "YES", onPress: () => console.log("YES") },
  //       { text: "NO", onPress: () => console.log("NO") },
  //     ])
  //   }
  // />
}
