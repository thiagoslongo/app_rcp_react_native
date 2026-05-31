import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require("../../../assets/images/backgroud-tela-inicial.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image
            source={require("../../../assets/images/icon.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.title}>Treinamento RCP</Text>
        </View>
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoPrimario} onPress={() => {}}>
            <Text style={styles.textoPrimario}>INICIAR SIMULAÇÃO DE RCP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => router.push("/(tabs)/instrucoes")}
          >
            <Text style={styles.textoSecundario}>GUIA RÁPIDO DO APP</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Sobre o Aplicativo</Text>
            <Text style={styles.modalTexto}>
              Desenvolvido por: Thiago Resmini Slongo
            </Text>
            <Text style={styles.modalTexto}>
              Colaboradores do Projeto: Jhoanna Vitória, Luan Carlos, Eduardo de
              Souza e Renato Scortegagna
            </Text>
            <Text style={styles.modalTexto}>Versão: 2.0.0</Text>
            <Text style={styles.modalTexto}>
              Este aplicativo foi criado para auxiliar os estudantes para a
              prática de RCP.
            </Text>
            <Text style={styles.modalTexto}>
              © 2026 - Todos os direitos reservados
            </Text>
            <Pressable
              style={styles.botaoClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textFechar}>Fechar</Text>
            </Pressable>
          </View>
        </Modal>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="info-circle" size={25} color={"#000000"} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  logo: {
    marginBottom: 80,
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1D1B20",
    marginBottom: 30,
  },
  botaoPrimario: {
    backgroundColor: "#2D2343",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginBottom: 10,
  },
  botaoSecundario: {
    backgroundColor: "#D0BCFF",
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  textoPrimario: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textoSecundario: {
    color: "#1D1B20",
    fontSize: 18,
    fontWeight: "bold",
  },
  botoesContainer: {
    gap: 12,
    marginTop: 32,
  },
  infoButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  modalContainer: {
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 20,
  },
  modalTitulo: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
  },
  botaoClose: {
    borderRadius: 20,
    backgroundColor: "#000",
    marginTop: 30,
    height: 25,
    justifyContent: "center",
  },
  textFechar: {
    textAlign: "center",
    color: "white",
  },
  modalTexto: {
    marginBottom: 8,
    fontSize: 14,
    color: "#000",
  },
});
