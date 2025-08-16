export interface DistribuidorCreateDto {
  duenio: string;
  duenioCelular: string;
  duenioWhatsapp: string;
  empresaNombre: string;
  empresaRuc: string;
  empresaCelular: string;
  empresaGiro: string;
}

export interface DistribuidorUpdateDto {
  id: number;
  duenio: string;
  duenioCelular: string;
  duenioWhatsapp: string;
  empresaNombre: string;
  empresaRuc: string;
  empresaCelular: string;
  empresaGiro: string;
}

export interface DistribuidorShowDto {
  id: number;
  duenio: string;
  duenioCelular: string;
  duenioWhatsapp: string;
  empresaNombre: string;
  empresaRuc: string;
  empresaCelular: string;
  empresaGiro: string;
  activated: boolean;
}
