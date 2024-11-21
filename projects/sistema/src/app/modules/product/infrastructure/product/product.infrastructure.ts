import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Product } from '../../domain/product/product';
import { ProductRepository } from '../../domain/product/product.repository';

@Injectable()
export class ProductInfrastructure
  extends BaseInfrastructure<Product>
  implements ProductRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/products');
  }
}
