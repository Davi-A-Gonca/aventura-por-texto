import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View } from "react-native";

import Choices from "../../scripts/choices";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.titleText} type="title">Aventura por Texto!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Choices />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    backgroundColor: "Black"
  },
  stepContainer: {
    flex: 1,
  },
  titleText: {
    color: "darkgreen",
    textAlign: "center"
  },
});
