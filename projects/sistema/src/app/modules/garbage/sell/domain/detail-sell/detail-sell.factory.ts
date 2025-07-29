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

    if (price === null || price === undefined)
      throw new Error('Falta el precio del detalle de venta');
    if (amount === null || amount === undefined)
      throw new Error('Falta la cantidad del detalle de venta');
    if (sell === null || sell === undefined)
      throw new Error('Falta la venta en el detalle de venta');
    if (product === null || product === undefined)
      throw new Error('Falta el producto en el detalle de venta');

    if (typeof price !== 'number')
      throw new Error('El precio debe ser un número');
    if (price < 0) throw new Error('El precio no debe ser negativo');

    if (typeof amount !== 'number')
      throw new Error('La cantidad debe ser un número');
    if (amount <= 0) throw new Error('La cantidad debe ser mayor a 0');

    return new DetailSell(detailSellProperties);
  }
}
