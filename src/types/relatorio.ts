export type ItemRelatorio = {
  id: string;
  dataHora: string;
  tipoRitmo: string;
  tempoTotal: string;
  qtdCiclos: number;
  doseEpinefrina: number;
  doseAmiodarona: number;
  choqueAplicado: number;
  eventos: EventoSimulacao[];
};

export type EventoSimulacao = {
  tipo: "epinefrina" | "amiodarona" | "choque";
  timeStamp: number;
};
