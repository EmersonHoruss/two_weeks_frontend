export interface CajaCreateDto {
  fecha: string;
  montoInicial: number;
}

export interface CajaUpdateDto {
  id: number;
  fecha: string;
  montoInicial: number;
}

export interface CajaShowDto {
  id: number;
  fecha: string;
  montoInicial: number;
  montoFinalFisico: number;
  montoFinalDigital: number;
  ganancia: number;
}
