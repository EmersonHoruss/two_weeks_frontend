import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Product } from '../../domain/product/product';
import {
  ProductCreateDto,
  ProductShowDto,
  ProductUpdateDto,
} from './product.dto';
import { BrandMapper } from '../../../brand/application/brand/brand.mapper';
import { SizeMapper } from '../../../size/application/size/size.mapper';
import { TypeMapper } from '../../../type/application/type/type.mapper';


@Injectable()
export class ProductMapper
  implements
    IMapper<Product, ProductCreateDto, ProductUpdateDto, ProductShowDto>
{
  toEntity(showDto: ProductShowDto): Product {
    const {
      id,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      type: typeShowDto,
      brand: brandShowDto,
      size: sizeShowDto,
    } = showDto;
    const type = new TypeMapper().toEntity(typeShowDto);
    const brand = new BrandMapper().toEntity(brandShowDto);
    const size = new SizeMapper().toEntity(sizeShowDto);

    return new Product({
      id,
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      type,
      brand,
      size,
    });
  }

  toCreateDto(entity: Product): ProductCreateDto {
    const {
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      type,
      brand,
      size,
    } = entity.properties();
    const typeId = type.properties().id;
    const brandId = brand.properties().id;
    const sizeId = size.properties().id;

    return {
      stock,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      typeId,
      brandId,
      sizeId,
    };
  }

  toUpdateDto(entity: Product): ProductUpdateDto {
    const {
      id,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      type,
      brand,
      size,
    } = entity.properties();
    const typeId = type.properties().id;
    const brandId = brand.properties().id;
    const sizeId = size.properties().id;

    return {
      id,
      purchasePrice,
      sellPriceNormal,
      sellPriceWholesale1,
      sellPriceWholesale2,
      code,
      typeId,
      brandId,
      sizeId,
    };
  }
}
