import * as moment from 'moment';

export const exibirCompetencia = (mes: any, ano: any) => {
  try {
    if (!mes || !ano) {
      return '';
    }

    if (isNaN(parseInt(mes))) {
      return `${mes}/${ano}`;
    }

    return moment(new Date(`${ano}-${mes.toString().padStart(3, '0')}`))
      .locale('pt-br')
      .format('MMM/YYYY')
      .toString()
      .toUpperCase();
  } catch (e) {
    return '';
  }
};
