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
  const [modalEscolhaVisible, setModalEscolhaVisible] = useState(false);
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
          <TouchableOpacity
            style={styles.botaoPrimario}
            onPress={() => setModalEscolhaVisible(true)}
          >
            <Text style={styles.textoPrimario}>INICIAR SIMULAÇÃO DE RCP</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalEscolhaVisible}
            onRequestClose={() => setModalEscolhaVisible(false)}
          >
            <View style={styles.modalEscolhaRitmo}>
              <View style={styles.modalEscolhaContainer}>
                <Text style={styles.textEscolhaRitmo}>Escolha o Ritmo</Text>
                <Pressable
                  style={styles.botaoEscolhaRitmo}
                  onPress={() => {
                    setModalEscolhaVisible(false);
                    router.push("/(tabs)/fv-tvsp");
                  }}
                >
                  <Text style={styles.textBotaoEscolhaRitmo}>FV / TVSP</Text>
                </Pressable>
                <Pressable
                  style={styles.botaoEscolhaRitmo}
                  onPress={() => {
                    setModalEscolhaVisible(false);
                    router.push("/(tabs)/aesp-assistolia");
                  }}
                >
                  <Text style={styles.textBotaoEscolhaRitmo}>
                    AESP / Assistolia
                  </Text>
                </Pressable>
                <Pressable onPress={() => setModalEscolhaVisible(false)}>
                  <Text style={styles.textFecharEscolha}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => router.push("/(tabs)/instrucoes")}
          >
            <Text style={styles.textoSecundario}>GUIA RÁPIDO DO APP</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
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
  modalEscolhaRitmo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    color: "white",
  },
  modalEscolhaContainer: {
    backgroundColor: "#2D2343",
    borderRadius: 20,
    padding: 30,
    width: "80%",
    alignItems: "center",
    gap: 12,
    marginTop: -70,
  },
  textFecharEscolha: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  botaoEscolhaRitmo: {
    backgroundColor: "#ffffffd7",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  textBotaoEscolhaRitmo: {
    color: "#2D2343",
    fontSize: 16,
    fontWeight: "bold",
  },
  textEscolhaRitmo: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
