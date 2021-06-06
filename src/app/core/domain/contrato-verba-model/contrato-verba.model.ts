import { ContratoVerbaProdModel } from './contrato-verba-prod.model';
import { ContratoVerbaProdUsoModel } from './contrato-verba-prod-uso.model';
import { ContratoVerbaFilialModel } from './contrato-verba-filial.model';

export interface ContratoVerbaModel {
  id?: string;
  idUsuario?: string;
  contratoAtivo?: boolean;
  nomeContrato?: string;
  tipoContrato?: string;
  tipoMovimentacao?: string;
  idUsuNegociador?: string;
  negociador?: string;
  dataCriacao?: string;
  responsavelCriacao?: string;
  periodoVigenciaInicio?: string;
  periodoVigenciaFinal?: string;
  valorRessarcimento?: string;
  valorLimite?: string;
  mecanicaContrato?: string;
  dtLiberacao?: string;
  dsUsuLiberacao?: string;
  idUsuLiberacao?: string;
  idUsuUltAlt?: string;
  dsUsuUltAlt?: string;
  dtUltAlt?: string;
  horaAlt?: string;
  completed?: boolean;

  listacontratoVerbaFiliais?: ContratoVerbaFilialModel[];
  listacontratoVerbaProds?: ContratoVerbaProdModel[];
  listacontratoVerbaProdUsos?: ContratoVerbaProdUsoModel[];
}
