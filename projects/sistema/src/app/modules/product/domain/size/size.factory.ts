import { Size, SizeProperties } from './size';

export class SizeFactory {
  create({ id, name, activated }) {
    const sizeProperties: SizeProperties = { id, name, activated };

    if (name === null || name === undefined)
      throw new Error('Falta el nombre de la talla');

    return new Size(sizeProperties);
  }
}
