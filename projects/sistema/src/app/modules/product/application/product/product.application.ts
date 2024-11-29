import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Product } from '../../domain/product/product';
import { ProductRepository } from '../../domain/product/product.repository';
import { ProductInfrastructure } from '../../infrastructure/product/product.infrastructure';
import { ProductCreateDto, ProductShowDto, ProductUpdateDto } from './product.dto';
import { ProductMapper } from './product.mapper';

@Injectable()
export class ProductApplication extends BaseApplication<
  Product,
  ProductCreateDto,
  ProductUpdateDto,
  ProductShowDto,
  ProductRepository
> {
  constructor(
    @Inject(ProductInfrastructure)
    private readonly productRepository: ProductRepository,
    private readonly productMapper: ProductMapper
  ) {
    super(productRepository, productMapper);
  }
}
