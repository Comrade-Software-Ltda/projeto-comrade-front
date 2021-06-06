export const formatarEmPorcentagem = (value: number, toFixed = 2, multiplo = 100) =>
  `${((value || 0) * multiplo).toFixed(toFixed).replace('.', ',') + '%'}`;
