import { Type, TypeProperties } from './type';

export class TypeFactory {
  create({ id, name, activated }) {
    const typeProperties: TypeProperties = { id, name, activated };

    if (name === null || name === undefined)
      throw new Error('Falta el nombre del tipo');

    return new Type(typeProperties);
  }
}
