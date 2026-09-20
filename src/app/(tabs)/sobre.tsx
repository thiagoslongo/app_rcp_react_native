import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View>
      <Text style={styles.modalTitulo}>Sobre o Aplicativo</Text>
      <Text style={styles.modalTexto}>
        Desenvolvido por: Thiago Resmini Slongo
      </Text>
      <Text style={styles.modalTexto}>
        Colaboradores do Projeto: Jhoanna Vitória, Luan Carlos, Eduardo de Souza
        e Renato Scortegagna
      </Text>
      <Text style={styles.modalTexto}>Versão: 2.0.0</Text>
      <Text style={styles.modalTexto}>
        Este aplicativo foi criado para auxiliar os estudantes para a prática de
        RCP.
      </Text>
      <Text style={styles.modalTexto}>
        © 2026 - Todos os direitos reservados
      </Text>
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
  modalTitulo: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
  },
  modalTexto: {
    marginBottom: 8,
    fontSize: 14,
    color: "#000",
  },
});
