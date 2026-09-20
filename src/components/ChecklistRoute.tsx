import CheckboxItem from "@/components/CheckboxItem";
import { useState } from "react";
import { ScrollView } from "react-native";

type Props = {
  itens: {
    id: number;
    texto: string;
    marcado: boolean;
  }[];
  idsApenasTexto: number[];
};

const ChecklistRoute = ({ itens, idsApenasTexto }: Props) => {
  const [itensState, setItensState] = useState(itens);

  const alternarItem = (id: number) => {
    setItensState((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, marcado: !item.marcado } : item,
      ),
    );
  };

  return (
    <ScrollView>
      {itensState.map((item) => {
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

export default ChecklistRoute;
