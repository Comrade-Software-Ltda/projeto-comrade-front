export interface kpmgPermissaoTokenModel {
  unique_name: string;
  nome: string;
  role: string;
  nbf: number;
  exp: number;
  iat: number;
}
