import { Sell, SellProperties } from './sell';

export class SellFactory {
  create() {
    const sellProperties: SellProperties = {};

    return new Sell(sellProperties);
  }
}
