export interface SizeRequired {
  name: string;
}

export interface SizeOptional {
  id: number;
  code: string;
  activated: boolean;
}

export type SizeProperties = Required<SizeRequired> & Partial<SizeOptional>;

export type SizeUpdate = Partial<{ id: number; name: string }>;

export type SizeDisplay = SizeProperties & {
  '#': number;
};

export class Size {
  private readonly id: number;
  private name: string;
  private code: string;
  private activated: boolean;

  constructor(properties: SizeProperties) {
    Object.assign(this, properties);
  }

  properties(): SizeProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      activated: this.activated,
    };
  }

  update(fields: SizeUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): SizeDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
