import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Product } from '../../domain/product/product';
import { ProductRepository } from '../../domain/product/product.repository';
import { ProductInfrastructure } from '../../infrastructure/product/product.infrastructure';

@Injectable()
export class ProductApplication extends BaseApplication<
  Product,
  ProductRepository
> {
  constructor(
    @Inject(ProductInfrastructure)
    private readonly productRepository: ProductRepository
  ) {
    super(productRepository);
  }
}
