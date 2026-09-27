import AcoesRoute from "@/components/AcoesRouteFv";
import ChecklistRoute from "@/components/ChecklistRoute";
import Header from "@/components/Header";
import ModalCicloCompleto from "@/components/ModalCicloCompleto";
import SimulacaoTabBar from "@/components/SimulacaoTabBar";
import { checklistFvTvsp } from "@/data/checklistFvTvsp";
import React, { useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TabView } from "react-native-tab-view";

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
          renderTabBar={(props) => <SimulacaoTabBar {...props} scrollable />}
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
