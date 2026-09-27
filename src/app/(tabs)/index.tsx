import ModalEscolhaRitmo from "@/components/ModalEscolhaRitmo";
import ModalGuiaRapido from "@/components/ModalGuiaRapido";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
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
          <ModalEscolhaRitmo
            visible={modalEscolhaVisible}
            fechar={() => setModalEscolhaVisible(false)}
          />
          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textoSecundario}>GUIA RÁPIDO DO APP</Text>
          </TouchableOpacity>
          <ModalGuiaRapido
            visible={modalVisible}
            fechar={() => setModalVisible(false)}
          />
        </View>
      </SafeAreaView>
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
  botaoEscolhaRitmo: {
    backgroundColor: "#ffffffd7",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
});
