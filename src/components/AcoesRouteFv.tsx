import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AcoesRoute = ({
  cronometroAtivo,
  ciclos,
  choques,
  dosesEpinefrina,
  dosesAmiodarona,
  exibirTempoFormatado,
  onPressCompressao,
  onPressEpinefrina,
  onPressAmiodarona,
  onPressChoques,
  lembreteVisivel,
}: {
  cronometroAtivo: boolean;
  ciclos: number;
  choques: number;
  onPressChoques: () => void;
  dosesEpinefrina: number;
  dosesAmiodarona: number;
  lembreteVisivel: boolean;
  exibirTempoFormatado: () => string;
  onPressCompressao: () => void;
  onPressEpinefrina: () => void;
  onPressAmiodarona: () => void;
}) => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      {lembreteVisivel && (
        <View style={styles.cardLembrete}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color="#000"
          />
          <Text style={styles.textoLembrete}>
            Clique em "Compressão Torácica" para iniciar o cronômetro e a
            contagem de ciclos
          </Text>
        </View>
      )}
      {/* btn.compressao */}
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={onPressCompressao}
      >
        <View>
          <MaterialCommunityIcons
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
          <Text style={styles.descricaoGeral}>IOT: 10 Ventilações/minuto</Text>
        </View>
      </TouchableOpacity>
      {/* btn.desfibrilação */}
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={onPressChoques}
        disabled={!cronometroAtivo}
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
          <Text style={styles.onPressPadrao}>Choques Aplicados: {choques}</Text>
        </View>
      </TouchableOpacity>
      {/* btn.epinefrina */}
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={onPressEpinefrina}
        disabled={!cronometroAtivo}
      >
        <View>
          <MaterialCommunityIcons name="medication" size={25} color="#000000" />
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
        onPress={onPressAmiodarona}
        disabled={!cronometroAtivo}
      >
        <View>
          <MaterialCommunityIcons name="medication" size={25} color="#000000" />
        </View>
        <View>
          <Text style={styles.textoPrincipal}>Amiodarona</Text>
          <Text style={styles.descricaoGeral}>Após o 3° choque 300mg</Text>
          <Text style={styles.descricaoGeral}>Após o 5° choque 150mg</Text>
          <Text style={styles.onPressPadrao}>Doses: {dosesAmiodarona}</Text>
        </View>
      </TouchableOpacity>
      {/* btn.relatório */}
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => Alert.alert("Gerando relatório...")}
        disabled={!cronometroAtivo}
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
    </ScrollView>
  </View>
);

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
    fontSize: 18,
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
