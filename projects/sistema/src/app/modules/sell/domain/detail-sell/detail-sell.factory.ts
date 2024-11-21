import { DetailSell, DetailSellProperties } from './detail-sell';

export class DetailSellFactory {
  create({ id, totalPrice, activated, price, amount, sell, product }) {
    const detailSellProperties: DetailSellProperties = {
      id,
      totalPrice,
      activated,
      price,
      amount,
      sell,
      product,
    };

    

    return new DetailSell(detailSellProperties);
  }
}
