import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  fechar: () => void;
};

export default function ModalGuiaRapido({ visible, fechar }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={fechar}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitulo}>Guia Rápido</Text>
        <Text style={styles.modalTitulo}>
          Este App auxilia estudantes e profissionais da saúde em paradas
          cardiorrespiratórias.
        </Text>
        <Pressable style={styles.botaoClose} onPress={fechar}>
          <Text style={styles.textFechar}>Fechar</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
