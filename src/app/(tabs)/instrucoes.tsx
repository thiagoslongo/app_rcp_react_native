import { StyleSheet, Text, View } from "react-native";

export default function Instrucoes() {
  return (
    <View>
      <Text style={styles.textoTitulo}>Instruções do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    padding: 60,
    margin: 20,
    display: "flex",
    fontWeight: "bold",
    color: "#1D1B20",
    fontSize: 25,
  },
});
