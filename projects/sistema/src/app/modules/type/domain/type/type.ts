export interface TypeRequired {
  name: string;
}

export interface TypeOptional {
  id: number;
  code: string;
  activated: boolean;
}

export type TypeProperties = Required<TypeRequired> & Partial<TypeOptional>;

export type TypeUpdate = Partial<{ id: number; name: string }>;

export type TypeDisplay = TypeProperties & {
  '#': number;
};

export class Type {
  private readonly id: number;
  private name: string;
  private code: string;
  private activated: boolean;

  constructor(properties: TypeProperties) {
    Object.assign(this, properties);
  }

  properties(): TypeProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      activated: this.activated,
    };
  }

  update(fields: TypeUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): TypeDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
