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
      <Text>Relatório de Atendimento</Text>
      <Text>Tempo Total={tempoTotal} </Text>
      <Text>Ciclos Completos={ciclos} </Text>
      <Text>Doses={dosesAmiodarona} </Text>
      <Pressable onPress={onFechar}>
        <Text>Fechar!</Text>
      </Pressable>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#2D2343",
    borderRadius: 20,
    padding: 30,
    width: "80%",
    alignItems: "center",
    gap: 12,
  },
});

export default RelatorioCard;
