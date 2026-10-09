import { EventoSimulacao } from "@/types/relatorio";
import { exibirTempoFormatado } from "@/utils/formatarTempo";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface RelatorioCardProps {
  tempoTotal: string;
  ciclos: number;
  dosesEpinefrina: number;
  tipoRitmo: string;
  dosesAmiodarona?: number;
  choques?: number;
  visible: boolean;
  eventos: EventoSimulacao[];
  onFechar: () => void;
}

const RelatorioCard = ({
  visible,
  onFechar,
  tempoTotal,
  ciclos,
  dosesEpinefrina,
  dosesAmiodarona,
  tipoRitmo,
  choques,
  eventos,
}: RelatorioCardProps) => (
  <Modal visible={visible}>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.textTitulo}>Relatório de Atendimento</Text>
          </View>
          <View style={styles.modalBotao}>
            <ScrollView>
              <Text style={styles.textoRitmo}>
                <Text style={{ fontWeight: "bold" }}>Ritmo: </Text>
                {tipoRitmo}
              </Text>
              <Text style={styles.textoConteudo}>
                <Text style={{ fontWeight: "bold" }}>Tempo Total: </Text>
                {tempoTotal}
              </Text>
              <Text style={styles.textoConteudo}>
                <Text style={{ fontWeight: "bold" }}>Ciclos Completos: </Text>
                {ciclos}
              </Text>
              <Text style={styles.textoConteudo}>
                <Text style={{ fontWeight: "bold" }}>Epinefrina: </Text>
                {dosesEpinefrina}
              </Text>
              {dosesAmiodarona && (
                <Text style={styles.textoConteudo}>
                  <Text style={{ fontWeight: "bold" }}>Amiodarona: </Text>
                  {dosesAmiodarona}
                </Text>
              )}
              {choques && (
                <Text style={styles.textoConteudo}>
                  <Text style={{ fontWeight: "bold" }}>Choques: </Text>
                  {choques}
                </Text>
              )}
              {eventos.map((evento, posicao) => (
                <Text key={posicao}>
                  {exibirTempoFormatado(evento.timeStamp)} - {evento.tipo}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={styles.estruturaBotao}>
            <Pressable style={styles.botao} onPress={onFechar}>
              <Text style={styles.botaoTexto}>Fechar Relatório</Text>
            </Pressable>
            <Pressable style={styles.botao}>
              <Text style={styles.botaoTexto}>Compartilhar</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  textTitulo: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  modalHeader: {
    padding: 5,
    backgroundColor: "#2D2343",
    borderRadius: 9,
  },
  textoRitmo: {
    fontSize: 26,
    marginBottom: 10,
  },
  textoConteudo: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalBotao: {
    flex: 1,
  },
  botao: {
    backgroundColor: "#2D2343",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 12,
    marginTop: 10,
    overflow: "hidden",
    flex: 1,
  },
  botaoTexto: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  estruturaBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default RelatorioCard;
