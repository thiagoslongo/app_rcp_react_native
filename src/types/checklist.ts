export type ItemChecklist = {
  id: number;
  texto: string;
  marcado: boolean;
};

export type SecaoChecklist = {
  key: string;
  title: string;
  idsApenasTexto: number[];
  itens: ItemChecklist[];
};
