export interface BrandRequired {
  name: string;
}

export interface BrandOptional {
  id: number;
  activated: boolean;
}

export type BrandProperties = Required<BrandRequired> & Partial<BrandOptional>;

export type BrandUpdate = Partial<{ id: number; name: string }>;

export class Brand {
  private readonly id: number;
  private name: string;
  private activated: boolean;

  constructor(properties: BrandProperties) {
    Object.assign(this, properties);
  }

  properties(): BrandProperties {
    return {
      id: this.id,
      name: this.name,
      activated: this.activated,
    };
  }

  update(fields: BrandUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
