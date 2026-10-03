import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// tela que lista os relatórios salvos
export default function Relatorios() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Image
        source={require("../../../assets/images/icon.png")}
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.titulo}>Atendimentos Recentes</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 24,
    marginTop: 24,
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 16,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D2343",
    padding: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: "center",
  },
});
