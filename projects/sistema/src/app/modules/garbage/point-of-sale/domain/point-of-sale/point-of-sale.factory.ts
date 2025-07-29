import { PointOfSale, PointOfSaleProperties } from './point-of-sale';

export class PointOfSaleFactory {
  create({ id, virtualAmount, phisicalAmount, date, initialAmount }) {
    const PointOfSaleProperties: PointOfSaleProperties = {
      id,
      virtualAmount,
      phisicalAmount,
      date,
      initialAmount,
    };

    if (initialAmount === null || initialAmount === undefined)
      throw new Error('Falta el monto inicial del cajero');

    if (typeof initialAmount !== 'number')
      throw new Error('El monto inicial debe ser un número');
    if (initialAmount < 0)
      throw new Error('El monto inicial no debe ser negativo');

    return new PointOfSale(PointOfSaleProperties);
  }
}
