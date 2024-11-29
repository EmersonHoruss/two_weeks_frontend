import { Customer, CustomerProperties } from './customer';

export class CustomerFactory {
  create({ id, identityType, identity, name }) {
    const detailSellProperties: CustomerProperties = {
      id,
      identityType,
      identity,
      name,
    };

    if (identityType === null || identityType === undefined)
      throw new Error(
        'Falta el tipo de identidad (dni o pasaporte) del cliente'
      );
    if (identity === null || identity === undefined)
      throw new Error('Falta la identidad del cliente');
    if (name === null || name === undefined)
      throw new Error('Falta el nombre del cliente');

    return new Customer(detailSellProperties);
  }
}
