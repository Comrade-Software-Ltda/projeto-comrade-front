export const mesCurto = (value: number) => {
  const arr = [
    { key: 1, value: 'Jan' },
    { key: 2, value: 'Fev' },
    { key: 3, value: 'Mar' },
    { key: 4, value: 'Abr' },
    { key: 5, value: 'Mai' },
    { key: 6, value: 'Jun' },
    { key: 7, value: 'Jul' },
    { key: 8, value: 'Ago' },
    { key: 9, value: 'Set' },
    { key: 10, value: 'Out' },
    { key: 11, value: 'Nov' },
    { key: 12, value: 'Dez' },
  ];

  const result = new Map(arr.map((i) => [i.key, i.value]));

  return result.get(value);
};
