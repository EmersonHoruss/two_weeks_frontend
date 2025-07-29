import { Product, ProductProperties } from './product';

export class ProductFactory {
  create({
    id,
    code,
    type,
    brand,
    size,
    stock,
    purchasePrice,
    sellPriceNormal,
    sellPriceWholesale1,
    sellPriceWholesale2,
    activated,
  }) {
    const ProductProperties: ProductProperties = {
      id,
      code,
      type,
      brand,
      size,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      activated,
    };

    if (type === null || type === undefined)
      throw new Error('Falta el tipo del producto');
    if (brand === null || brand === undefined)
      throw new Error('Falta la marca del producto');
    if (size === null || size === undefined)
      throw new Error('Falta la talla del producto');
    if (stock === null || stock === undefined)
      throw new Error('Falta el stock del producto');
    if (purchasePrice === null || purchasePrice === undefined)
      throw new Error('Falta el precio de compra del producto');
    if (sellPriceNormal === null || sellPriceNormal === undefined)
      throw new Error('Falta el precio de venta al por menor del producto');
    if (sellPriceWholesale1 === null || sellPriceWholesale1 === undefined)
      throw new Error('Falta el precio de venta al por mayor 1 del producto');
    if (sellPriceWholesale2 === null || sellPriceWholesale2 === undefined)
      throw new Error('Falta el precio de venta al por mayor 2 del producto');

    if (typeof purchasePrice !== 'number')
      throw new Error('El precio de compra debe ser un número');
    if (purchasePrice < 0)
      throw new Error('El precio de compra no debe ser negativo');

    if (typeof sellPriceNormal !== 'number')
      throw new Error('El precio de venta al por menor debe ser un número');
    if (sellPriceNormal < 0)
      throw new Error('El precio de venta al por menor no debe ser negativo');

    if (typeof sellPriceWholesale1 !== 'number')
      throw new Error('El precio de venta al por mayor 1 debe ser un número');
    if (sellPriceWholesale1 < 0)
      throw new Error('El precio de venta al por mayor 1 no debe ser negativo');

    if (typeof sellPriceWholesale2 !== 'number')
      throw new Error('El precio de venta al por mayor 2 debe ser un número');
    if (sellPriceWholesale2 < 0)
      throw new Error('El precio de venta al por mayor 2 no debe ser negativo');

    return new Product(ProductProperties);
  }
}
