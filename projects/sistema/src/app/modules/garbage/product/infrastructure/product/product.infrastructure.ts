import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { ProductUpdate } from '../../domain/product/product';
import { ProductRepository } from '../../domain/product/product.repository';
import {
  ProductCreateDto,
  ProductShowDto,
} from '../../application/product/product.dto';

@Injectable()
export class ProductInfrastructure
  extends BaseInfrastructure<ProductCreateDto, ProductUpdate, ProductShowDto>
  implements ProductRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/products');
  }
}
