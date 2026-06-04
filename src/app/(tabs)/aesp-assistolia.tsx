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

export default function AespAssistolia() {
  const [dosesEpinefrina, setDosesEpinefrina] = useState(0);
  const [segundosCronometro, setSegundosCronometro] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [ciclos, setCiclos] = useState(0);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;

    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setSegundosCronometro((valorAnterior) => {
          const novoSegundo = valorAnterior + 1;

          if (novoSegundo % 120 === 0) {
            setCiclos((cicloAnterior) => cicloAnterior + 1);
          }

          return novoSegundo;
        });
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [cronometroAtivo]);

  const exibirTempoFormatado = () => {
    const min = Math.floor(segundosCronometro / 60);
    const seg = segundosCronometro % 60;

    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <View style={styles.header}>
          <View>
            {" "}
            <MaterialCommunityIcons
              name="arrow-left-circle"
              size={25}
              color={"rgba(255,255,255,0.9)"}
            >
              {" "}
            </MaterialCommunityIcons>{" "}
          </View>
          <Text style={styles.headerText}>AESP / ASSISTO...</Text>
          <Text style={styles.headerText}>{exibirTempoFormatado()}</Text>
          <Text style={styles.headerText}>Ciclos: {ciclos}</Text>
        </View>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            setCronometroAtivo(!cronometroAtivo);
          }}
        >
          <View>
            <FontAwesome
              name="heart"
              size={25}
              color={cronometroAtivo ? "green" : "#000000"}
            />
          </View>
          <View>
            <Text style={styles.textoPrincipal}>Compressão Torácia</Text>
            <Text style={styles.descricaoGeral}>
              100 a 120 compressões por minuto
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.cronometroStyle}>
                {" "}
                {exibirTempoFormatado()}
              </Text>
              <Text style={styles.ciclosStyele}>Ciclos: {ciclos}</Text>
            </View>
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
  onPressPadrao: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  cronometroStyle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  ciclosStyele: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
