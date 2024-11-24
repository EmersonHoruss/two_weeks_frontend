export interface PointOfSaleRequired {
  date: Date;
  initialAmount: number;
}

export interface PointOfSaleOptional {
  id: number;
  brutalEarning: number; // calculated property: virtualAmount + phisicalAmount
  virtualAmount: number; // such as yape, plin, or others
  phisicalAmount: number; // phisical money
}

export type PointOfSaleProperties = Required<PointOfSaleRequired> &
  Partial<PointOfSaleOptional>;

export type PointOfSaleUpdate = Partial<{
  date: Date;
  initialAmount: number;
  virtualAmount: number;
  phisicalAmount: number;
}>;

export class PointOfSale {
  private readonly id: number;
  private brutalEarning: number;
  private virutalAmount: number;
  private phisicalAmount: number;
  private initialAmount: number;
  private date: Date;

  constructor(properties: PointOfSaleProperties) {
    let { virtualAmount, phisicalAmount } = properties;
    virtualAmount = virtualAmount ?? 0;
    phisicalAmount = phisicalAmount ?? 0;
    const brutalEarning = virtualAmount + phisicalAmount;

    Object.assign(this, { ...properties, brutalEarning });
  }

  properties(): PointOfSaleProperties {
    return {
      id: this.id,
      brutalEarning: this.brutalEarning,
      virtualAmount: this.virutalAmount,
      phisicalAmount: this.phisicalAmount,
      initialAmount: this.initialAmount,
      date: this.date,
    };
  }

  update(fields: PointOfSaleUpdate) {
    Object.assign(this, fields);

    let { virtualAmount, phisicalAmount } = fields;
    virtualAmount = virtualAmount ?? 0;
    phisicalAmount = phisicalAmount ?? 0;
    this.brutalEarning = virtualAmount + phisicalAmount;
  }
}
