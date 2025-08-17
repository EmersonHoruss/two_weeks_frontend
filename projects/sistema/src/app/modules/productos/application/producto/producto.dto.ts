export interface ProductoCreateDto {
  nombre: string;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  codigo: string;
  distribuidorId: number;
}

export interface ProductoUpdateDto {
  id: number;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  distribuidorId: number;
}

export interface ProductoShowDto {
  id: number;
  nombre: string;
  nombreUnico: string;
  precioCompra: number;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  stock: number;
  codigo: string;
  activated: boolean;
}

export interface ProductoManualCreateDto {
  sistemaId: number;
  nombre: string;
  precioCompra: number;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  stock: number;
  codigo: string;
  distribuidorId: number;
}

export interface ProductoManualUpdateDto {
  id: number;
  sistemaId: number;
  nombre: string;
  precioCompra: number;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  stock: number;
  codigo: string;
  activated: boolean;
  distribuidorId: number;
}
