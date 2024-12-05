export interface ProductRequired {
  type: string;
  brand: string;
  size: string;
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
}

export interface ProductOptional {
  id: number;
  name: string; // calculated attribute: type + brand + size
  code: string;
  activated: boolean;
}

export type ProductProperties = Required<ProductRequired> &
  Partial<ProductOptional>;

export type ProductUpdate = Partial<{
  id: number;
  code: string;
  type: string;
  brand: string;
  size: string;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
}>;

export class Product {
  private readonly id: number;
  private name: string;
  private code: string;
  private type: string;
  private brand: string;
  private size: string;
  private stock: number;
  private purchasePrice: number;
  private sellPriceNormal: number;
  private sellPriceWholesale1: number;
  private sellPriceWholesale2: number;
  private activated: boolean;

  constructor(properties: ProductProperties) {
    this.activated = true;
    this.name = `${properties.type} ${properties.brand} ${properties.size}`;

    Object.assign(this, properties);
  }

  properties(): ProductProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      type: this.type,
      brand: this.brand,
      size: this.size,
      stock: this.stock,
      purchasePrice: this.purchasePrice,
      sellPriceNormal: this.sellPriceNormal,
      sellPriceWholesale1: this.sellPriceWholesale1,
      sellPriceWholesale2: this.sellPriceWholesale2,
      activated: this.activated,
    };
  }

  update(fields: ProductUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
