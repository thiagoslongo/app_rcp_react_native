export const checklistFvTvsp = [
  {
    key: "primeira",
    title: "Inicial",
    idsApenasTexto: [4, 5, 6, 11],
    itens: [
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
        texto: "Iniciar as compressões no terço inferior do esterno",
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
        texto: "Monitorar paciente com pás do desfibrilador",
        marcado: false,
      },
      { id: 9, texto: "Observar monitor - FV/TVSP", marcado: false },
      { id: 10, texto: "Retomar compressões", marcado: false },
      {
        id: 11,
        texto:
          "Ciclos de 30 compressões para 2 ventilações com bolsa, válvula, máscara",
        marcado: false,
      },
    ],
  },
  {
    key: "segunda",
    title: "Acesso",
    idsApenasTexto: [2, 3, 9],
    itens: [
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
        texto: "Solicitar acesso venoso periférico durante as compressões",
        marcado: false,
      },
      { id: 4, texto: "Abocath 18", marcado: false },
      { id: 5, texto: "Abocath 20", marcado: false },
      { id: 6, texto: "Torneirinha", marcado: false },
      {
        id: 7,
        texto:
          "Realizar monitorização com eletrodos do desfibrilador enquanto são realizadas as compressões",
        marcado: false,
      },
      {
        id: 8,
        texto:
          "Após 5 ciclos de RCP, verificar pulso e analisar o ritmo por no máximo 10 segundos",
        marcado: false,
      },
      { id: 9, texto: "Realizar 1° Choque", marcado: false },
      {
        id: 10,
        texto: "FALAR EM VOZ ALTA: Ajustar carga do desfibrilador",
        marcado: false,
      },
      { id: 11, texto: "Bifásico 200J", marcado: false },
    ],
  },
  {
    key: "terceira",
    title: "Via Aérea",
    idsApenasTexto: [4, 6, 7, 8, 9],
    itens: [
      {
        id: 1,
        texto: "Monofásico 360J",
        marcado: false,
      },
      {
        id: 2,
        texto:
          "Após 5 ciclos de RCP, verificar pulso e analisar o ritmo por no máximo 10 segundos",
        marcado: false,
      },

      { id: 3, texto: "Realizar 2° Choque", marcado: false },
      { id: 4, texto: "Continuar compressões", marcado: false },
      {
        id: 5,
        texto:
          "Iniciar epinefrina 1mg durante as compressões e repeti-la a cada 3-5min",
        marcado: false,
      },
      {
        id: 6,
        texto: "FALAR EM VOZ ALTA: Administrar epinefrina 1MG",
        marcado: false,
      },
      {
        id: 7,
        texto: "FALAR EM VOZ ALTA: Preparando 1MG de epinefrina",
        marcado: false,
      },
      {
        id: 8,
        texto: "Aspirar adrenalina em um seringa de 3ML",
        marcado: false,
      },
      {
        id: 9,
        texto: "Aspirar 20ML de soro fisiológico em uma seringa de 20ML",
        marcado: false,
      },
      { id: 10, texto: "Elevar membro", marcado: false },
      {
        id: 11,
        texto: "Solicitar via aérea avançada COM MÁSCARA DE LARÍNGEA ou IOT",
        marcado: false,
      },
    ],
  },
  {
    key: "quarta",
    title: "Desfibrilação",
    idsApenasTexto: [8, 9, 10],
    itens: [
      {
        id: 1,
        texto:
          "Realizou com sucesso a via aérea avançada e FALAR EM VOZ ALTA: VIA AÉREA AVANÇADA PRONTA",
        marcado: false,
      },
      { id: 2, texto: "01 Ventilação a cada 06 segundos", marcado: false },
      { id: 3, texto: "Manter fonte de oxigênio a 15 l/min", marcado: false },
      {
        id: 4,
        texto:
          "SOLICITAR INÍCIO DE compressões contínuas por dois minutos e 01 ventilação a cada seis segundos",
        marcado: false,
      },
      {
        id: 5,
        texto: "Checar pulso e analisar o ritmo por no máximo 10 segundos",
        marcado: false,
      },
      {
        id: 6,
        texto:
          "Após 2 min de RCP, verificar o pulso e analisar o ritmo por máximo de 10 segundos",
        marcado: false,
      },
      { id: 7, texto: "Realizar o 3° Choque", marcado: false },
      {
        id: 8,
        texto: "FALAR EM VOZ ALTA: Administrar Amiodarona 300MG",
        marcado: false,
      },
      {
        id: 9,
        texto: "FALAR EM VOZ ALTA: Preparando 300MG de Amiodarona",
        marcado: false,
      },
      {
        id: 10,
        texto: "Aspirar 20ML de soro fisiológico em uma seringa de 20ML",
        marcado: false,
      },
      { id: 11, texto: "Elevar membro", marcado: false },
    ],
  },
  {
    key: "quinta",
    title: "Amiodarona",
    idsApenasTexto: [4, 5, 6, 7, 12, 13],
    itens: [
      {
        id: 1,
        texto:
          "Após 2 min de RCP, verificar o pulso e analisar o ritmo por no máximo 10 segundos no monitor",
        marcado: false,
      },
      {
        id: 2,
        texto: "Analisar o ritmo, paciente mantém em FV / TVSP",
        marcado: false,
      },
      { id: 3, texto: "Realizar o 4° Choque", marcado: false },
      {
        id: 4,
        texto: "FALAR EM VOZ ALTA: Administrar Epinefrina 1MG",
        marcado: false,
      },
      {
        id: 5,
        texto: "FALAR EM VOZ ALTA: Preparando 1MG de Epinefrina",
        marcado: false,
      },
      {
        id: 6,
        texto: "Aspirar adrenalina em uma seringa de 3ML",
        marcado: false,
      },
      {
        id: 7,
        texto: "Aspirar 20ML de soro fisiolófico em uma seringa de 20ML",
        marcado: false,
      },
      { id: 8, texto: "Elevar o membro", marcado: false },
      {
        id: 9,
        texto:
          "Após 2 min de RCP, verificar o pulso e analisar o ritmo por no máximo 10 segundos no monitor",
        marcado: false,
      },
      {
        id: 10,
        texto: "Analisar o ritmo, paciente mantém em FV / TVSP",
        marcado: false,
      },
      { id: 11, texto: "Realizar o 5° Choque", marcado: false },
    ],
  },
  {
    key: "sexto",
    title: "Pós-RCP",
    idsApenasTexto: [1, 2, 3, 7, 8, 10],
    itens: [
      {
        id: 1,
        texto: "FALAR EM VOZ ALTA: Administrar Amiodarona 150MG",
        marcado: false,
      },
      {
        id: 2,
        texto: "FALAR EM VOZ ALTA: Preparando 150MG de Amiodarona",
        marcado: false,
      },
      {
        id: 3,
        texto: "Aspirar 20ML de soro fisiolófico em uma seringa de 20ML",
        marcado: false,
      },
      { id: 4, texto: "Elevar o membro", marcado: false },
      {
        id: 5,
        texto:
          "Após 2 min de RCP, verificar o pulso e analisar o ritmo por no máximo 10 segundos no monitor",
        marcado: false,
      },
      {
        id: 6,
        texto: "Analisar o ritmo, paciente mantém em FV / TVSP",
        marcado: false,
      },
      { id: 7, texto: "Realizar o 6° Choque", marcado: false },
      { id: 8, texto: "Continuar as compressões", marcado: false },
      {
        id: 9,
        texto:
          "Após 2 min de RCP, verificar o pulso e analisar o ritmo por no máximo 10 segundos no monitor",
        marcado: false,
      },
      { id: 10, texto: "Presença de pulso:", marcado: false },
      {
        id: 11,
        texto: "Monitorar os sinais vitais e instalar drogas vasoativas",
        marcado: false,
      },
    ],
  },
];
