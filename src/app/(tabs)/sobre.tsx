import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/images/icon.png")}
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.titulo}>Sobre o Aplicativo</Text>
        <Text style={styles.texto}>
          Desenvolvido por: Thiago Resmini Slongo
        </Text>
        <Text style={styles.texto}>
          Colaboradores do Projeto: Jhoanna Vitória, Luan Carlos, Eduardo de
          Souza e Renato Scortegagna
        </Text>
        <Text style={styles.texto}>Versão: 2.0.0</Text>
        <Text style={styles.texto}>
          Este aplicativo foi criado para auxiliar os estudantes para a prática
          de RCP.
        </Text>
        <Text style={styles.rodape}>© 2026 - Todos os direitos reservados</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D2343",
    marginBottom: 8,
  },
  texto: {
    lineHeight: 22,
    fontSize: 14,
    color: "#444",
  },
  rodape: {
    fontSize: 14,
    color: "#999",
    marginTop: 12,
    textAlign: "center",
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 16,
    alignSelf: "center",
  },
});
