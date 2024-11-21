import { Operation, OperationProperties } from './operation';

export class OperationFactory {
  create({ id, type, amount, date, productId }) {
    const operationProperties: OperationProperties = {
      id,
      type,
      amount,
      date,
      productId,
    };

    if (type === null || type === undefined)
      throw new Error('Falta el tipo de la operación');
    if (amount === null || amount === undefined)
      throw new Error('Falta la cantidad de la operación');
    if (date === null || date === undefined)
      throw new Error('Falta la fecha de la operación');
    if (productId === null || productId === undefined)
      throw new Error('Falta el Id del producto de la operación');

    if (typeof amount !== 'number')
      throw new Error('La cantidad debe ser numérica');
    if (amount <= 0) throw new Error('La cantidad debe ser mayor que 0');

    return new Operation(operationProperties);
  }
}
