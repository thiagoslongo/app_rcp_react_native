import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ModalCicloCompleto = ({
  clickExibirCiclo,
  visible,
}: {
  visible: boolean;
  clickExibirCiclo: () => void;
}) => (
  <Modal visible={visible} transparent={true} animationType="fade">
    <View style={styles.modalEscolhaRitmo}>
      <View style={styles.modalEscolhaContainer}>
        <MaterialCommunityIcons name="alert-circle" size={50} color="#D0BCFF" />
        <Text style={styles.textEscolhaRitmo}>Ciclo Completo!</Text>
        <Text style={{ color: "white", textAlign: "center" }}>
          Considere alternar o socorrista e verificar o ritmo.
        </Text>
        <Pressable onPress={clickExibirCiclo}>
          <Text style={styles.textFecharEscolha}>Entendi</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalEscolhaRitmo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.69)",
  },
  modalEscolhaContainer: {
    backgroundColor: "#2D2343",
    borderRadius: 20,
    padding: 30,
    width: "80%",
    alignItems: "center",
    gap: 12,
  },
  textEscolhaRitmo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textFecharEscolha: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#000",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ModalCicloCompleto;
