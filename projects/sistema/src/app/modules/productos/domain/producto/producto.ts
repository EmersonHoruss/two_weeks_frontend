export interface ProductoRequired {
  nombre: string;
  nombreUnico: string;
  precioCompra: number;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  stock: number;
  codigo: string;
  distribuidorId: number;
}

export interface ProductoOptional {
  id: number;
  activated: boolean;
}

export type ProductoProperties = Required<ProductoRequired> &
  Partial<ProductoOptional>;

export type ProductoUpdate = Partial<{
  id: string;
  precioVentaMenor: number;
  precioVentaMayor: number;
  precioVentaSuperMayor: number;
  distribuidorId: number;
}>;

export type ProductoDisplay = ProductoProperties & {
  '#': number;
};

export class Producto {
  private readonly id: number;
  private nombre: string;
  private nombreUnico: string;
  private precioCompra: number;
  private precioVentaMenor: number;
  private precioVentaMayor: number;
  private precioVentaSuperMayor: number;
  private stock: number;
  private codigo: string;
  private activated: boolean;
  private distribuidorId: number;

  constructor(properties: ProductoProperties) {
    Object.assign(this, properties);
  }

  properties(): ProductoProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      nombreUnico: this.nombreUnico,
      precioCompra: this.precioCompra,
      precioVentaMenor: this.precioVentaMenor,
      precioVentaMayor: this.precioVentaMayor,
      precioVentaSuperMayor: this.precioVentaSuperMayor,
      stock: this.stock,
      codigo: this.codigo,
      activated: this.activated,
      distribuidorId: this.distribuidorId,
    };
  }

  update(fields: ProductoUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): ProductoDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
