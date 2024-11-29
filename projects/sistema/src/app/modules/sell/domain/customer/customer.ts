export enum IdentityType {
  Dni = 'DNI',
  Passport = 'Pasaporte',
}

export interface CustomerRequired {
  identity: string; // dni or passport
  identityType: IdentityType;
  name: string;
}

export interface CustomerOptional {
  id: number;
}

export type CustomerProperties = Required<CustomerRequired> &
  Partial<CustomerOptional>;

export type CustomerUpdate = Partial<{
  identity: string;
  identityType: IdentityType;
  name: string;
}>;

export class Customer {
  private readonly id: number;
  private identity: string;
  private identityType: IdentityType;
  private name: string;

  constructor(properties: CustomerProperties) {
    Object.assign(this, properties);
  }

  properties(): CustomerProperties {
    return {
      id: this.id,
      identity: this.identity,
      identityType: this.identityType,
      name: this.name,
    };
  }

  update(fields: CustomerUpdate) {
    Object.assign(this, fields);
  }
}
