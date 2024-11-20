export interface SellRequired {}

export interface SellOptional {
  id: number;
  activated: boolean;
}

export type SellProperties = Required<SellRequired> & Partial<SellOptional>;

export type SellUpdate = Partial<{}>;

export class Sell {
  private readonly id: number;
  private activated: boolean;

  constructor(properties: SellProperties) {
    this.activated = true;
    Object.assign(this, properties);
  }

  properties(): SellProperties {
    return {};
  }

  update(fields: SellUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
