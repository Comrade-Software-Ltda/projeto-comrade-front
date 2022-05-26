export interface UsuarioModel {
  id?: number;
  nome: string;
  email: string;
  dataDeNascimento: Date;
  genero: string;
  preferenciaGenero?: string;
  telefoneDDI?: string;
  telefoneDDD?: string;
  telefoneNumero?: string;
  idadeMinima?: number;
  idadeMaxima?: number;
}
