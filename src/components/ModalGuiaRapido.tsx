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
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitulo}>Guia Rápido</Text>
          <Text style={styles.modalDescricao}>
            Este App auxilia estudantes e profissionais da saúde em paradas
            cardiorrespiratórias.
          </Text>
          <Text style={styles.modalTexto}>
            1. Toque em "Iniciar Simulação de RCP"
          </Text>
          <Text style={styles.modalTexto}>
            2. Escolha o ritmo cardíaco identificado
          </Text>
          <Text style={styles.modalTexto}>
            3. Toque em "Compressão Torácica" para iniciar o cronômetro e a
            contagem de ciclos
          </Text>
          <Text style={styles.modalTexto}>
            4. Navegue pelas abas superiores para acessar os checklists e marque
            os itens realizados
          </Text>
          <Text style={styles.modalTexto}>
            5. Volte para a aba "Ações" a qualquer momento para visualizar o
            cronômetro
          </Text>
          <Text style={styles.modalTexto}>
            6. Ao finalizar, toque novamente em "Compressão Torácica" para
            pausar
          </Text>
          <Text style={styles.modalTexto}>
            7. Toque em "Relatório" para visualizar e salvar o resumo do
            atendimento
          </Text>
          <Pressable style={styles.botaoClose} onPress={fechar}>
            <Text style={styles.textFechar}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 20,
    gap: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 24,
  },
  modalDescricao: {
    fontSize: 16,
    padding: 4,
    marginBottom: 12,
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
    backgroundColor: "#2D2343",
    marginTop: 20,
    paddingVertical: 12,
    justifyContent: "center",
  },
  textFechar: {
    textAlign: "center",
    color: "white",
  },
  modalTexto: {
    fontSize: 16,
    padding: 4,
  },
});
