export interface SizeRequired {
  name: string;
}

export interface SizeOptional {
  id: number;
  activated: boolean;
}

export type SizeProperties = Required<SizeRequired> & Partial<SizeOptional>;

export type SizeUpdate = Partial<{ id: number; name: string }>;

export class Size {
  private readonly id: number;
  private name: string;
  private activated: boolean;

  constructor(properties: SizeProperties) {
    Object.assign(this, properties);
  }

  properties(): SizeProperties {
    return {
      id: this.id,
      name: this.name,
      activated: this.activated,
    };
  }

  update(fields: SizeUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
