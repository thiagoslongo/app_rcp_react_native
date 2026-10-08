import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface RelatorioCardProps {
  tempoTotal: string;
  ciclos: number;
  dosesEpinefrina: number;
  tipoRitmo: string;
  dosesAmiodarona?: number;
  choques?: number;
  visible: boolean;
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
}: RelatorioCardProps) => (
  <Modal visible={visible}>
    <View style={styles.modalContainer}>
      <Text style={styles.textTitulo}>Relatório de Atendimento:</Text>
    </View>
    <View style={styles.modalContainer}>
      <Text>Ritmo: {tipoRitmo}</Text>
      <Text>Tempo Total: {tempoTotal} </Text>
      <Text>Ciclos Completos: {ciclos} </Text>
      <Text>Epinefrina: {dosesEpinefrina}</Text>
      {dosesAmiodarona && <Text>Amiodarona: {dosesAmiodarona}</Text>}
      {choques && <Text>Choques: {choques}</Text>}
      <Pressable onPress={onFechar}>
        <Text style={styles.textFechar}>Fechar Relatório</Text>
      </Pressable>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 30,
    gap: 12,
    backgroundColor: "#D0BCFF",
  },
  textTitulo: {
    fontWeight: "bold",
    fontSize: 22,
  },
  textFechar: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#000",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginTop: 10,
    overflow: "hidden",
    width: "80%",
  },
});

export default RelatorioCard;
