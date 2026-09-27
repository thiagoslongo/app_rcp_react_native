import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AcoesRoute = ({
  cronometroAtivo,
  ciclos,
  dosesEpinefrina,
  exibirTempoFormatado,
  onPressCompressao,
  onPressEpinefrina,
  lembreteVisivel,
}: {
  cronometroAtivo: boolean;
  ciclos: number;
  dosesEpinefrina: number;
  lembreteVisivel: boolean;
  exibirTempoFormatado: () => string;
  onPressCompressao: () => void;
  onPressEpinefrina: () => void;
}) => (
  <View style={{ flex: 1 }}>
    {lembreteVisivel && (
      <View style={styles.cardLembrete}>
        <MaterialCommunityIcons
          name="information-outline"
          size={24}
          color="#000"
        />
        <Text style={styles.textoLembrete}>
          Clique em "Compressão Torácica" para iniciar o cronômetro e a contagem
          de ciclos
        </Text>
      </View>
    )}
    <TouchableOpacity style={styles.cardContainer} onPress={onPressCompressao}>
      <View>
        <FontAwesome
          name="heart"
          size={25}
          color={cronometroAtivo ? "green" : "#000000"}
        />
      </View>
      <View>
        <Text style={styles.textoPrincipal}>Compressão Torácica</Text>
        <Text style={styles.descricaoGeral}>
          100 a 120 compressões por minuto
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cronometroStyle}> {exibirTempoFormatado()}</Text>
          <Text style={styles.ciclosStyele}>Ciclos: {ciclos}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
        <Text style={styles.descricaoGeral}>IOT: 10 Ventilações/minuto</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cardContainer} onPress={onPressEpinefrina}>
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
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardLembrete: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#D0BCFF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textoLembrete: {
    flex: 1,
    fontSize: 14,
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

export default AcoesRoute;
