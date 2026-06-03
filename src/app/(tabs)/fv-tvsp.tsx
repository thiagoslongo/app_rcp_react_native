import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function FvTvsp() {
  const [choques, setChoques] = useState(0);
  const [dosesAmiodarona, setDosesAmiodarona] = useState(0);
  const [dosesEpinefrina, setDosesEpinefrina] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>FV / TVSP</Text>
            <Text style={styles.headerText}>00:00</Text>
            <Text style={styles.headerText}>Ciclos: 0</Text>
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
          <TouchableOpacity style={styles.cardContainer}>
            <View>
              <MaterialCommunityIcons
                name="weather-windy"
                size={25}
                color="#000"
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
          {/* btn.desfibrilacao */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => setChoques(choques + 1)}
          >
            <View>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={25}
                color="#000"
              />
            </View>
            <View>
              <Text style={styles.textoPrincipal}>Desfibrilação</Text>
              <Text style={styles.descricaoGeral}>Aplicar choque de 200J</Text>
              <Text style={styles.descricaoGeral}>
                Reiniciar RCP imediatamente após o choque
              </Text>
              <Text style={styles.onPressPadrao}>
                Choques Aplicados: {choques}
              </Text>
            </View>
          </TouchableOpacity>
          {/* btn.epinefrina */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => setDosesEpinefrina(dosesEpinefrina + 1)}
          >
            <View>
              <MaterialCommunityIcons
                name="medication"
                size={25}
                color="#000"
              />
            </View>
            <View>
              <Text style={styles.textoPrincipal}>Epinefrina</Text>
              <Text style={styles.descricaoGeral}>
                Administrar a cada 3-5 minutos
              </Text>
              <Text style={styles.onPressPadrao}>Doses: {dosesEpinefrina}</Text>
            </View>
          </TouchableOpacity>
          {/* btn.amiodarona */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => {
              if (dosesAmiodarona < 2) {
                setDosesAmiodarona(dosesAmiodarona + 1);
              } else {
                Alert.alert("Já foi usado as 2 doses!");
              }
            }}
          >
            <View>
              <MaterialCommunityIcons
                name="medication"
                size={25}
                color="#000"
              />
            </View>
            <View>
              <Text style={styles.textoPrincipal}>Amiodarona</Text>
              <Text style={styles.descricaoGeral}>Após o 3° choque 300mg</Text>
              <Text style={styles.descricaoGeral}>Após o 5° choque 150mg</Text>
              <Text style={styles.onPressPadrao}>Doses: {dosesAmiodarona}</Text>
            </View>
          </TouchableOpacity>
          {/* btn.relatorio */}
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => Alert.alert("Gerando relatório...")}
          >
            <View>
              <FontAwesome name="file-text" size={25} color={"#000000"} />
            </View>
            <View>
              <Text style={styles.textoPrincipal}>Relatório</Text>
              <Text style={styles.descricaoGeral}>
                Visualizar o resumo do atendimento.
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
});
