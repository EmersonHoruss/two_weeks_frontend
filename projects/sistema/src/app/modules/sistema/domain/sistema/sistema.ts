export interface SistemaRequired {
  id: number;
  empresaNombre: string;
  empresaRuc: string;
  empresaDuenio: string;
  duenioCelular: string;
  abre: string;
  cierra: string;
  edicionManualProducto: boolean;
}

export interface SistemaOptional {}

export type SistemaProperties = Required<SistemaRequired> &
  Partial<SistemaOptional>;

export type SistemaUpdate = Required<{
  id: number;
  empresaNombre: string;
  empresaRuc: string;
  empresaDuenio: string;
  duenioCelular: string;
  abre: string;
  cierra: string;
}>;

export type SistemaDisplay = SistemaProperties;

export class Sistema {
  private readonly id: number;
  private empresaNombre: string;
  private empresaRuc: string;
  private empresaDuenio: string;
  private duenioCelular: string;
  private abre: string;
  private cierra: string;
  private edicionManualProducto: boolean;

  constructor(properties: SistemaProperties) {
    Object.assign(this, properties);
  }

  properties(): SistemaProperties {
    return {
      id: this.id,
      empresaNombre: this.empresaNombre,
      empresaRuc: this.empresaRuc,
      empresaDuenio: this.empresaDuenio,
      duenioCelular: this.duenioCelular,
      abre: this.abre,
      cierra: this.cierra,
      edicionManualProducto: this.edicionManualProducto,
    };
  }

  update(fields: SistemaUpdate) {
    Object.assign(this, fields);
  }

  enableEdicionManualProducto(enabled: boolean) {
    this.edicionManualProducto = enabled;
  }

  display(): SistemaDisplay {
    return { ...this.properties() };
  }
}
