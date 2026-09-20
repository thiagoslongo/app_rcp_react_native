import { useRouter } from "expo-router";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  fechar: () => void;
};

export default function ModalEscolhaRitmo({ visible, fechar }: Props) {
  const router = useRouter();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={fechar}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.titulo}>Escolha o Ritmo</Text>

          <Pressable
            style={styles.botaoEscolhaRitmo}
            onPress={() => {
              fechar();
              router.push("/fv-tvsp");
            }}
          >
            <Text style={styles.textBotaoEscolhaRitmo}>FV / TVSP</Text>
          </Pressable>

          <Pressable
            style={styles.botaoEscolhaRitmo}
            onPress={() => {
              fechar();
              router.push("/aesp-assistolia");
            }}
          >
            <Text style={styles.textBotaoEscolhaRitmo}>AESP / Assistolia</Text>
          </Pressable>

          <Pressable onPress={() => fechar()}>
            <Text style={styles.textFecharEscolha}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  modal: {
    backgroundColor: "#2D2343",
    padding: 30,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    gap: 12,
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  botaoEscolhaRitmo: {
    backgroundColor: "#ffffffd7",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  textBotaoEscolhaRitmo: {
    color: "#2D2343",
    fontSize: 16,
    fontWeight: "bold",
  },
  textFecharEscolha: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
});
