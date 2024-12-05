export interface TypeRequired {
  name: string;
}

export interface TypeOptional {
  id: number;
  activated: boolean;
}

export type TypeProperties = Required<TypeRequired> & Partial<TypeOptional>;

export type TypeUpdate = Partial<{ id: number; name: string }>;

export class Type {
  private readonly id: number;
  private name: string;
  private activated: boolean;

  constructor(properties: TypeProperties) {
    Object.assign(this, properties);
  }

  properties(): TypeProperties {
    return {
      id: this.id,
      name: this.name,
      activated: this.activated,
    };
  }

  update(fields: TypeUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
