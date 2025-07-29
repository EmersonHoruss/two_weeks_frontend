import { Sell, SellProperties } from './sell';

export class SellFactory {
  create({
    id,
    customer,
    detailSells,
    activated,
    date,
    totalAmount,
    paymentMethod,
    status,
    seller,
    debtCollector,
  }) {
    const sellProperties: SellProperties = {
      id,
      customer,
      detailSells,
      activated,
      date,
      totalAmount,
      paymentMethod,
      status,
      seller,
      debtCollector,
    };

    if (seller) throw new Error('Falta el vendedor de la venta');

    return new Sell(sellProperties);
  }
}
