import { Customer, CustomerProperties } from './customer';

export class CustomerFactory {
  create({
    id,
    secondName,
    secondSurname,
    fullName,
    identity,
    firstName,
    surname,
  }) {
    const detailSellProperties: CustomerProperties = {
      id,
      secondName,
      secondSurname,
      fullName,
      identity,
      firstName,
      surname,
    };

    if (identity === null || identity === undefined)
      throw new Error('Falta el dni o pasaporte del cliente');
    if (firstName === null || firstName === undefined)
      throw new Error('Falta el nombre del cliente');
    if (surname === null || surname === undefined)
      throw new Error('Falta el apellido del cliente');

    return new Customer(detailSellProperties);
  }
}
