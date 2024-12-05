import { Brand } from '../brand/brand';
import { Size } from '../size/size';
import { Type } from '../type/type';

export interface ProductRequired {
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  type: Type;
  brand: Brand;
  size: Size;
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
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  type: Type;
  brand: Brand;
  size: Size;
}>;

export type ProductDisplay = ProductProperties & {
  '#': number;
  typeStr: string;
  brandStr: string;
  sizeStr: string;
};

export class Product {
  private readonly id: number;
  private name: string;
  private code: string;
  private stock: number;
  private purchasePrice: number;
  private sellPriceNormal: number;
  private sellPriceWholesale1: number;
  private sellPriceWholesale2: number;
  private type: Type;
  private brand: Brand;
  private size: Size;
  private activated: boolean;

  constructor(properties: ProductProperties) {
    this.activated = true;
    Object.assign(this, properties);
  }

  properties(): ProductProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      stock: this.stock,
      purchasePrice: this.purchasePrice,
      sellPriceNormal: this.sellPriceNormal,
      sellPriceWholesale1: this.sellPriceWholesale1,
      sellPriceWholesale2: this.sellPriceWholesale2,
      type: this.type,
      brand: this.brand,
      size: this.size,
      activated: this.activated,
    };
  }

  update(fields: ProductUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }

  display(): ProductDisplay {
    const { name: typeName, activated: typeActivated } = this.type.properties();
    const typeStr: string = typeActivated ? typeName : null;

    const { name: brandName, activated: brandActivated } =
      this.brand.properties();
    const brandStr: string = brandActivated ? brandName : null;

    const { name: sizeName, activated: sizeActivated } = this.size.properties();
    const sizeStr: string = sizeActivated ? sizeName : null;

    return {
      ...this.properties(),
      '#': null,
      typeStr,
      brandStr,
      sizeStr,
    };
  }
}
