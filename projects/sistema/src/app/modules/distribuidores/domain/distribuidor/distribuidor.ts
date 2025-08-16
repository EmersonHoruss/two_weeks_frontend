export interface DistribuidorRequired {
  duenio: string;
}

export interface DistribuidorOptional {
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

export type DistribuidorProperties = Required<DistribuidorRequired> &
  Partial<DistribuidorOptional>;

export type DistribuidorUpdate = Partial<{
  duenio: string;
  duenioCelular: string;
  duenioWhatsapp: string;
  empresaNombre: string;
  empresaRuc: string;
  empresaCelular: string;
  empresaGiro: string;
}>;

export type DistribuidorDisplay = DistribuidorProperties & {
  '#': number;
};

export class Distribuidor {
  private readonly id: number;
  private duenio: string;
  private duenioCelular: string;
  private duenioWhatsapp: string;
  private empresaNombre: string;
  private empresaRuc: string;
  private empresaCelular: string;
  private empresaGiro: string;
  private activated: boolean;

  constructor(properties: DistribuidorProperties) {
    Object.assign(this, properties);
  }

  properties(): DistribuidorProperties {
    return {
      id: this.id,
      duenio: this.duenio,
      duenioCelular: this.duenioCelular,
      duenioWhatsapp: this.duenioWhatsapp,
      empresaNombre: this.empresaNombre,
      empresaRuc: this.empresaRuc,
      empresaCelular: this.empresaCelular,
      empresaGiro: this.empresaGiro,
      activated: this.activated,
    };
  }

  update(fields: DistribuidorUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): DistribuidorDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
