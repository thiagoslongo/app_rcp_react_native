import CheckboxItem from "@/components/CheckboxItem";
import Header from "@/components/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TabBar, TabView } from "react-native-tab-view";

const AcoesRoute = ({
  cronometroAtivo,
  ciclos,
  dosesEpinefrina,
  exibirTempoFormatado,
  onPressCompressao,
  onPressEpinefrina,
}: {
  cronometroAtivo: boolean;
  ciclos: number;
  dosesEpinefrina: number;
  exibirTempoFormatado: () => string;
  onPressCompressao: () => void;
  onPressEpinefrina: () => void;
}) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity style={styles.cardContainer} onPress={onPressCompressao}>
      <View>
        <FontAwesome
          name="heart"
          size={25}
          color={cronometroAtivo ? "green" : "#000000"}
        />
      </View>
      <View>
        <Text style={styles.textoPrincipal}>Compressão Torácia</Text>
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

const InstrucoesARoute = () => {
  const [itens, setItens] = useState([
    {
      id: 1,
      texto: "Verificar o pulso por 10s: pulso carotídeo ou femoral",
      marcado: false,
    },
    {
      id: 2,
      texto: "Chamar ajuda e iniciar imediatamente a RCP",
      marcado: false,
    },
    {
      id: 3,
      texto: "Iniciar compressões: 30 compressões para 2 ventilações",
      marcado: false,
    },
    {
      id: 4,
      texto: "Iniciar compressões no terço inferior do esterno",
      marcado: false,
    },
    {
      id: 5,
      texto: "As compressões deprimem o tórax em 5cm",
      marcado: false,
    },
    {
      id: 6,
      texto: "As compressões permitem retorno do tórax P",
      marcado: false,
    },
    {
      id: 7,
      texto: "Delegar para pegar o carro de emergência",
      marcado: false,
    },
    {
      id: 8,
      texto: "Monitorar paciente com as pás do desfibrilador",
      marcado: false,
    },
    {
      id: 9,
      texto: "Observar monitor. Se linha reta: assistolia",
      marcado: false,
    },
    {
      id: 10,
      texto: "Retomar compressões",
      marcado: false,
    },
    {
      id: 11,
      texto:
        "Ciclos de 30 compressões para 2 ventilações com bolsa, válvula, máscara.",
      marcado: false,
    },
  ]);

  const idsApenasTexto = [4, 5, 6, 11];

  const alternarItem = (id: number) => {
    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id ? { ...item, marcado: !item.marcado } : item,
      ),
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {itens.map((item) => {
        const semCheckbox = idsApenasTexto.includes(item.id);

        return (
          <CheckboxItem
            key={item.id}
            texto={item.texto}
            marcado={item.marcado}
            semCheckbox={semCheckbox}
            onPress={() => alternarItem(item.id)}
          />
        );
      })}
    </ScrollView>
  );
};

const InstrucoesBRoute = () => {
  const [itens, setItens] = useState([
    {
      id: 1,
      texto: "Ligar fonte de oxigênio a 15 l/min",
      marcado: false,
    },
    {
      id: 2,
      texto: "Verificar se reservatório de oxigênio está enchendo",
      marcado: false,
    },
    {
      id: 3,
      texto: "Solicitar acesso venoso periférico durante as compressões:",
      marcado: false,
    },
    {
      id: 4,
      texto: "Abocath 18",
      marcado: false,
    },
    {
      id: 5,
      texto: "Abocath 20",
      marcado: false,
    },
    {
      id: 6,
      texto: "Torneirinha",
      marcado: false,
    },
    {
      id: 7,
      texto:
        "Realizar monitorização com eletrodos do desfibrilador enquanto são realizadas as compressões",
      marcado: false,
    },
    {
      id: 8,
      texto:
        "Após 5 ciclos de RCP, verificar o pulso e analisar o ritmo por máximo 10 segundos.",
      marcado: false,
    },
    {
      id: 9,
      texto: "SE MANTÉM AUSÊNCIA DE PULSO",
      marcado: false,
    },
    {
      id: 10,
      texto:
        "Iniciar epinefrina 1 mg durante as compressões e repeti-la a cada 3-5 minutos",
      marcado: false,
    },
    {
      id: 11,
      texto: "Falar em voz alta: administrar epinefrina 1 mg a cada 4 minutos",
      marcado: false,
    },
  ]);

  const idsApenasTexto = [2, 3, 9, 11];

  const alternarItem = (id: number) => {
    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id ? { ...item, marcado: !item.marcado } : item,
      ),
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {itens.map((item) => {
        const semCheckbox = idsApenasTexto.includes(item.id);

        return (
          <CheckboxItem
            key={item.id}
            texto={item.texto}
            marcado={item.marcado}
            semCheckbox={semCheckbox}
            onPress={() => alternarItem(item.id)}
          />
        );
      })}
    </ScrollView>
  );
};

const InstrucoesCRoute = () => {
  const [itens, setItens] = useState([
    {
      id: 1,
      texto: "Falar em voz alta: preparando 1 mg de epinefrina",
      marcado: false,
    },
    {
      id: 2,
      texto: "Aspirar adrenalina em uma seringa de 3ml",
      marcado: false,
    },
    {
      id: 3,
      texto: "Aspirar 20 ml de soro fisiológico em uma seringa de 20 ml",
      marcado: false,
    },
    {
      id: 4,
      texto: "Elevar membro",
      marcado: false,
    },
    {
      id: 5,
      texto: "Solicitar via aérea avançada COM MÁSCARA DE LARÍNGEA ou IOT",
      marcado: false,
    },
    {
      id: 6,
      texto: "Realizou com sucesso a via aérea avançada e Falar em voz alta:",
      marcado: false,
    },
    {
      id: 7,
      texto: "VIA AÉREA AVANÇADA PRONTA",
      marcado: false,
    },
    {
      id: 8,
      texto: "01 ventilação a cada 06 segundos",
      marcado: false,
    },
    {
      id: 9,
      texto: "Manter fonte de oxigênio a 15 l/min",
      marcado: false,
    },
    {
      id: 10,
      texto:
        "SOLICITAR INÍCIO DE compressões contínuas por dois minutos e 01 ventilação a cada seis segundos",
      marcado: false,
    },
    {
      id: 11,
      texto: "Chegar pulso e analisar o ritmo por no máximo 10 segundos.",
      marcado: false,
    },
  ]);

  const idsApenasTexto = [1, 2, 3, 6];

  const alternarItem = (id: number) => {
    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id ? { ...item, marcado: !item.marcado } : item,
      ),
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {itens.map((item) => {
        const semCheckbox = idsApenasTexto.includes(item.id);

        return (
          <CheckboxItem
            key={item.id}
            texto={item.texto}
            marcado={item.marcado}
            semCheckbox={semCheckbox}
            onPress={() => alternarItem(item.id)}
          />
        );
      })}
    </ScrollView>
  );
};

const routes = [
  { key: "acoes", title: "Ações" },
  { key: "primeira", title: "Inicial" },
  { key: "segunda", title: "Acesso" },
  { key: "terceira", title: "Via Aérea" },
];

export default function AespAssistolia() {
  const [dosesEpinefrina, setDosesEpinefrina] = useState(0);
  const [segundosCronometro, setSegundosCronometro] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [ciclos, setCiclos] = useState(0);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [modalCicloVisible, setModalCicloVisible] = useState(false);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;

    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setSegundosCronometro((valorAnterior) => {
          const novoSegundo = valorAnterior + 1;

          if (novoSegundo % 120 === 0) {
            setCiclos((cicloAnterior) => cicloAnterior + 1);
            setModalCicloVisible(true);
          }

          return novoSegundo;
        });
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [cronometroAtivo]);

  const exibirTempoFormatado = () => {
    const min = Math.floor(segundosCronometro / 60);
    const seg = segundosCronometro % 60;

    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  };

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "acoes":
        return (
          <AcoesRoute
            cronometroAtivo={cronometroAtivo}
            ciclos={ciclos}
            dosesEpinefrina={dosesEpinefrina}
            exibirTempoFormatado={exibirTempoFormatado}
            onPressCompressao={() => setCronometroAtivo(!cronometroAtivo)}
            onPressEpinefrina={() => setDosesEpinefrina(dosesEpinefrina + 1)}
          />
        );
      case "primeira":
        return <InstrucoesARoute />;
      case "segunda":
        return <InstrucoesBRoute />;
      case "terceira":
        return <InstrucoesCRoute />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      style={{ backgroundColor: "#2D2343" }}
      indicatorStyle={{ backgroundColor: "#D0BCFF" }}
      labelStyle={{ fontSize: 10, fontWeight: "bold" }}
      activeColor="#fff"
      inactiveColor="rgba(255,255,255,0.6)"
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <Header
          titulo="AESP / ASSISTO..."
          tempo={exibirTempoFormatado()}
          ciclos={ciclos}
        />
        <TabView
          lazy
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
        />
        <Modal
          visible={modalCicloVisible}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalEscolhaRitmo}>
            <View style={styles.modalEscolhaContainer}>
              <MaterialCommunityIcons
                name="alert-circle"
                size={50}
                color="#D0BCFF"
              />
              <Text style={styles.textEscolhaRitmo}>Ciclo Completo!</Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                Considere alternar o socorrista e verificar o ritmo.
              </Text>
              <Pressable onPress={() => setModalCicloVisible(false)}>
                <Text style={styles.textFecharEscolha}>Entendi</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
