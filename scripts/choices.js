import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import textos from "../Textos/Textos.json";

export default function Choices() {
  const [currentID, setCurrentID] = useState("inicio"); // apenas string
  const [history, setHistory] = useState([textos["inicio"].texto]); // array de textos
  const currentNode = textos[currentID];

  const handleChoice = (option) => {
  const proximoID = currentNode.proximos[option];
  console.log("Opção clicada:", option);
  console.log("Próximo ID:", proximoID);
  if (!proximoID || !textos[proximoID]) {
    console.warn("Nenhum próximo encontrado para:", option);
    return;
  }
  setHistory([...history, textos[proximoID].texto]);
  setCurrentID(proximoID);
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {history.map((h, index) => (
        h.map((p) =>(
        <Text key={index} style={styles.text}>
          {p}
        </Text>
        ))
      ))}

      <View style={styles.buttonContainer}>
        {Object.entries(currentNode.opcoes).map(([key, label]) => (
          <TouchableOpacity
            key={key}
            onPress={() => handleChoice(key)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>&gt; {label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "black",
    padding: 20,
  },
  text: {
    color: "darkgreen",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "none",
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "darkgreen",
    fontSize: 16,
  },
});
