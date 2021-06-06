export const formatarEmReal = (value: number, fixed: number = 2, Prefixo: string = '') =>
  Prefixo +
  ` ${value
    .toFixed(fixed)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
