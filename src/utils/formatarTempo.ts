export const exibirTempoFormatado = (totalSegundos: number) => {
  const min = Math.floor(totalSegundos / 60);
  const seg = totalSegundos % 60;

  return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
};
