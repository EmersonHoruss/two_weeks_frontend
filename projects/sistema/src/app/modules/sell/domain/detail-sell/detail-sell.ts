import { Product } from '../../../product/domain/product/product';
import { Sell } from '../sell/sell';

export interface DetailSellRequired {
  price: number;
  amount: number;
  sell: Sell;
  product: Product;
}

export interface DetailSellOptional {
  id: number;
  totalPrice: number; // calculated attribute: price * amount
  activated: boolean;
}

export type DetailSellProperties = Required<DetailSellRequired> &
  Partial<DetailSellOptional>;

export type DetailSellUpdate = Partial<{
  price: number;
  amount: number;
  sell: Sell;
  product: Product;
}>;

export class DetailSell {
  private readonly id: number;
  private totalPrice: number;
  private activated: boolean;
  private price: number;
  private amount: number;
  private sell: Sell;
  private product: Product;

  constructor(properties: DetailSellProperties) {
    this.activated = true;
    this.totalPrice = properties.amount * properties.price;
    Object.assign(this, properties);
  }

  properties(): DetailSellProperties {
    return {
      id: this.id,
      totalPrice: this.totalPrice,
      activated: this.activated,
      price: this.price,
      amount: this.amount,
      sell: this.sell,
      product: this.product,
    };
  }

  update(fields: DetailSellUpdate) {
    let { price, amount } = fields;
    if (
      price !== null ||
      price !== undefined ||
      amount !== null ||
      amount !== undefined
    ) {
      price = price === null || price === undefined ? this.price : price;
      amount = amount === null || amount === undefined ? this.amount : amount;

      this.totalPrice = price * amount;
    }

    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
