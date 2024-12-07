import { Brand, BrandProperties } from './brand';

export class BrandFactory {
  create({ id, name, activated }) {
    const brandProperties: BrandProperties = { id, name, activated };

    if (name === null || name === undefined)
      throw new Error('Falta el nombre de la marca');

    return new Brand(brandProperties);
  }
}
