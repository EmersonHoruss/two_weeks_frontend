export interface CajaRequired {
  fecha: string;
  montoInicial: number;
}

export interface CajaOptional {
  id: number;
  montoFinalFisico: number;
  montoFinalDigital: number;
  ganancia: number;
}

export type CajaProperties = Required<CajaRequired> & Partial<CajaOptional>;

export type CajaUpdate = Partial<{ id: number; montoInicial: number }>;

export type CajaDisplay = CajaProperties & {
  '#': number;
};

export class Caja {
  private readonly id: number;
  private fecha: string;
  private montoInicial: number;
  private montoFinalFisico: number;
  private montoFinalDigital: number;
  private ganancia: number;

  constructor(properties: CajaProperties) {
    Object.assign(this, properties);
  }

  properties(): CajaProperties {
    return {
      id: this.id,
      fecha: this.fecha,
      montoInicial: this.montoInicial,
      montoFinalFisico: this.montoFinalFisico,
      montoFinalDigital: this.montoFinalDigital,
      ganancia: this.ganancia,
    };
  }

  update(fields: CajaUpdate) {
    Object.assign(this, fields);
  }

  display(): CajaDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
