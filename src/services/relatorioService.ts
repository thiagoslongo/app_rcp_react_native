import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemRelatorio } from "../types/relatorio";

export const retriveData = async () => {
  try {
    const novoRelatorio = await AsyncStorage.getItem("relatorios");
    const relatorioAtualizado =
      novoRelatorio != null ? JSON.parse(novoRelatorio) : null;

    return relatorioAtualizado;
  } catch (e) {
    console.error(e);
  }
};

export const storeData = async (novoRelatorio: ItemRelatorio) => {
  try {
    const lista = (await retriveData()) ?? [];
    lista.push(novoRelatorio);
    await AsyncStorage.setItem("relatorios", JSON.stringify(lista));
  } catch (e) {
    console.error(e);
  }
};
