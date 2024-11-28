import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Product, ProductUpdate } from '../../domain/product/product';
import {
  ProductCreateDto,
  ProductShowDto,
  ProductUpdateDto,
} from './product.dto';

export class ProductMapper
  implements
    IMapper<
      Product,
      ProductUpdate,
      ProductCreateDto,
      ProductUpdateDto,
      ProductShowDto
    >
{
  toEntity(showDto: ProductShowDto): Product {
    const {
      id,
      type,
      brand,
      size,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    } = showDto;

    return new Product({
      id,
      type,
      brand,
      size,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    });
  }

  toCreateDto(entity: Product): ProductCreateDto {
    const {
      type,
      brand,
      size,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    } = entity.properties();

    return {
      type,
      brand,
      size,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    };
  }

  toUpdateDto(entity: ProductUpdate): ProductUpdateDto {
    const {
      id,
      type,
      brand,
      size,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    } = entity;

    return {
      id,
      type,
      brand,
      size,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
    };
  }
}
