import AcoesRoute from "@/components/AcoesRouteAesp";
import ChecklistRoute from "@/components/ChecklistRoute";
import Header from "@/components/Header";
import ModalCicloCompleto from "@/components/ModalCicloCompleto";
import SimulacaoTabBar from "@/components/SimulacaoTabBar";
import { checklistAesp } from "@/data/checklistAesp";
import React, { useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TabView } from "react-native-tab-view";

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
            exibirTempoFormatado={exibirTempoFormatado}
            onPressCompressao={() => {
              setCronometroAtivo(!cronometroAtivo);
              setLembreteVisivel(false);
            }}
            onPressEpinefrina={() => setDosesEpinefrina(dosesEpinefrina + 1)}
          />
        );
      case "primeira":
        return (
          <ChecklistRoute
            itens={checklistAesp[0].itens}
            idsApenasTexto={checklistAesp[0].idsApenasTexto}
            cronometroAtivo={cronometroAtivo}
          />
        );
      case "segunda":
        return (
          <ChecklistRoute
            itens={checklistAesp[1].itens}
            idsApenasTexto={checklistAesp[1].idsApenasTexto}
            cronometroAtivo={cronometroAtivo}
          />
        );
      case "terceira":
        return (
          <ChecklistRoute
            itens={checklistAesp[2].itens}
            idsApenasTexto={checklistAesp[2].idsApenasTexto}
            cronometroAtivo={cronometroAtivo}
          />
        );
      default:
        return null;
    }
  };

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
          renderTabBar={(props) => <SimulacaoTabBar {...props} />}
        />
        <ModalCicloCompleto
          visible={modalCicloVisible}
          clickExibirCiclo={() => setModalCicloVisible(false)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
