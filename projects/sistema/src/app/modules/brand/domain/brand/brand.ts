export interface BrandRequired {
  name: string;
}

export interface BrandOptional {
  id: number;
  code: string;
  activated: boolean;
}

export type BrandProperties = Required<BrandRequired> & Partial<BrandOptional>;

export type BrandUpdate = Partial<{ id: number; name: string }>;

export type BrandDisplay = BrandProperties & {
  '#': number;
};

export class Brand {
  private readonly id: number;
  private name: string;
  private code: string;
  private activated: boolean;

  constructor(properties: BrandProperties) {
    Object.assign(this, properties);
  }

  properties(): BrandProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      activated: this.activated,
    };
  }

  update(fields: BrandUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): BrandDisplay {
    return {
      ...this.properties(),
      '#': null,
    };
  }
}
