import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function FvTvsp() {
  const [dosesEpinefrina, setDosesEpinefrina] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((valorAnterior) => valorAnterior + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  const formatarTempo = () => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;

    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>FV / TVSP</Text>
          <Text style={styles.headerText}>00:00</Text>
          <Text style={styles.headerText}>Ciclos: 0</Text>
        </View>
        <View style={styles.cronometroContainer}>
          <Text style={styles.tempo}>{formatarTempo()}</Text>
          <TouchableOpacity onPress={() => setAtivo(!ativo)}>
            <Text>{ativo ? "Pausar" : "Iniciar"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setAtivo(false);
              setSegundos(0);
            }}
          >
            <Text>Resetar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cardContainer}>
          <View>
            <FontAwesome name="heart" size={25} color={"#000000"} />
          </View>
          <View>
            <Text style={styles.textoPrincipal}>Compressão Torácia</Text>
            <Text style={styles.descricaoGeral}>
              100 a 120 compressões por minuto
            </Text>
          </View>
        </TouchableOpacity>
        {/* btn.ventilacoes */}
        <TouchableOpacity style={styles.cardContainer} disabled={true}>
          <View>
            <MaterialCommunityIcons
              name="weather-windy"
              size={25}
              color={"#000000"}
            />
          </View>
          <View>
            <Text style={styles.textoPrincipal}>Ventilações</Text>
            <Text style={styles.descricaoGeral}>
              AMBU: 2 Ventilações / 30 Compressões
            </Text>
            <Text style={styles.descricaoGeral}>
              IOT: 10 Ventilações/minuto
            </Text>
          </View>
        </TouchableOpacity>
        {/* btn.epinefrina */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => setDosesEpinefrina(dosesEpinefrina + 1)}
        >
          <View>
            <MaterialCommunityIcons name="medication" size={25} color="#000" />
          </View>
          <View>
            <Text style={styles.textoPrincipal}>Epinefrina</Text>
            <Text style={styles.descricaoGeral}>
              Administrar a cada 3-5 minutos
            </Text>
            <Text style={styles.onPressPadrao}>Doses: {dosesEpinefrina}</Text>
          </View>
        </TouchableOpacity>
        {/* btn.relatorio */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => Alert.alert("Gerando relatório...")}
        >
          <View>
            <MaterialCommunityIcons
              name="file-document-plus"
              size={25}
              color={"#000000"}
            />
          </View>
          <View>
            <Text style={styles.textoPrincipal}>Relatório</Text>
            <Text style={styles.descricaoGeral}>
              Visualizar o resumo do atendimento.
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    gap: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textoPrincipal: {
    fontSize: 25,
    color: "#2D2343",
    fontWeight: "bold",
  },
  descricaoGeral: {
    color: "#2D2343",
    fontSize: 15,
  },
  header: {
    backgroundColor: "#2D2343",
    paddingTop: StatusBar.currentHeight || 80,
    paddingHorizontal: 20,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 20,
  },
  scrollView: {},
  onPressPadrao: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: "bold",
  },
  cronometroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempo: {
    fontSize: 48,
    marginBottom: 20,
  },
});
