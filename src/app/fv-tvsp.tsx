import AcoesRoute from "@/components/AcoesRouteFv";
import ChecklistRoute from "@/components/ChecklistRoute";
import Header from "@/components/Header";
import { checklistFvTvsp } from "@/data/checklistFvTvsp";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TabBar, TabView } from "react-native-tab-view";

const routes = [
  { key: "acoes", title: "Ações" },
  { key: "primeira", title: "Inicial" },
  { key: "segunda", title: "Acesso" },
  { key: "terceira", title: "Via Aérea" },
  { key: "quarta", title: "Desfibrilação" },
  { key: "quinta", title: "Amiodarona" },
  { key: "sexta", title: "Pós-RCP" },
];

export default function FvTvsp() {
  const [dosesEpinefrina, setDosesEpinefrina] = useState(0);
  const [dosesAmiodarona, setDosesAmiodarona] = useState(0);
  const [choques, setChoques] = useState(0);
  const [segundosCronometro, setSegundosCronometro] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [ciclos, setCiclos] = useState(0);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [modalCicloVisible, setModalCicloVisible] = useState(false);
  const [lembreteVisivel, setLembreteVisivel] = useState(true);

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
            lembreteVisivel={lembreteVisivel}
            cronometroAtivo={cronometroAtivo}
            ciclos={ciclos}
            dosesEpinefrina={dosesEpinefrina}
            dosesAmiodarona={dosesAmiodarona}
            choques={choques}
            onPressChoques={() => setChoques(choques + 1)}
            exibirTempoFormatado={exibirTempoFormatado}
            onPressCompressao={() => {
              setCronometroAtivo(!cronometroAtivo);
              setLembreteVisivel(false);
            }}
            onPressEpinefrina={() => setDosesEpinefrina(dosesEpinefrina + 1)}
            onPressAmiodarona={() => setDosesAmiodarona(dosesAmiodarona + 1)}
          />
        );
      case "primeira":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[0].itens}
            idsApenasTexto={checklistFvTvsp[0].idsApenasTexto}
          />
        );
      case "segunda":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[1].itens}
            idsApenasTexto={checklistFvTvsp[1].idsApenasTexto}
          />
        );
      case "terceira":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[2].itens}
            idsApenasTexto={checklistFvTvsp[2].idsApenasTexto}
          />
        );
      case "quarta":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[3].itens}
            idsApenasTexto={checklistFvTvsp[3].idsApenasTexto}
          />
        );
      case "quinta":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[4].itens}
            idsApenasTexto={checklistFvTvsp[4].idsApenasTexto}
          />
        );
      case "sexta":
        return (
          <ChecklistRoute
            itens={checklistFvTvsp[5].itens}
            idsApenasTexto={checklistFvTvsp[5].idsApenasTexto}
          />
        );
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
      activeColor="#ffffff"
      inactiveColor="rgba(255,255,255,0.6)"
      scrollEnabled={true}
      tabStyle={{ width: "auto" }}
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <Header
          titulo="FV / TVSP"
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
  scrollView: {},
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
