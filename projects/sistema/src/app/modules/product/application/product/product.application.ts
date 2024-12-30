import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Product } from '../../domain/product/product';
import { ProductRepository } from '../../domain/product/product.repository';
import { ProductInfrastructure } from '../../infrastructure/product/product.infrastructure';
import {
  ProductCreateDto,
  ProductShowDto,
  ProductUpdateDto,
} from './product.dto';
import { ProductMapper } from './product.mapper';
import { catchError, map, Observable, of } from 'rxjs';
import { RequestDto } from '../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../shared/domain/response';

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

  someProductHasType(typeId: number): Observable<boolean> {
    const requestDto: RequestDto = {
      page: { page: 0, size: 1 },
      query: `type.id<eq>${typeId}`,
    };

    return this.list(requestDto).pipe(
      map((response: Response<Product>) => {
        const products = response.content as Array<Product>;
        return !!products.length;
      }),
      catchError(() => of(false))
    );
  }

  someProductHasBrand(brandId: number): Observable<boolean> {
    const requestDto: RequestDto = {
      page: { page: 0, size: 1 },
      query: `brand.id<eq>${brandId}`,
    };

    return this.list(requestDto).pipe(
      map((response: Response<Product>) => {
        const products = response.content as Array<Product>;
        return !!products.length;
      }),
      catchError(() => of(false))
    );
  }

  someProductHasSize(sizeId: number): Observable<boolean> {
    const requestDto: RequestDto = {
      page: { page: 0, size: 1 },
      query: `size.id<eq>${sizeId}`,
    };

    return this.list(requestDto).pipe(
      map((response: Response<Product>) => {
        const products = response.content as Array<Product>;
        return !!products.length;
      }),
      catchError(() => of(false))
    );
  }
}
