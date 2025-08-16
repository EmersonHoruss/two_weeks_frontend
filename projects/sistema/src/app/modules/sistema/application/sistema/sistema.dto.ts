export interface SistemaCreateDto {}

export interface SistemaUpdateDto {
  id: number;
  empresaNombre: string;
  empresaRuc: string;
  empresaDuenio: string;
  duenioCelular: string;
  abre: string;
  cierra: string;
}

export interface SistemaShowDto {
  id: number;
  empresaNombre: string;
  empresaRuc: string;
  empresaDuenio: string;
  duenioCelular: string;
  abre: string;
  cierra: string;
  edicionManualProducto: boolean;
}
