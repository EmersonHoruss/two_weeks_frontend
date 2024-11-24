import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { PointOfSale } from '../../domain/point-of-sale/point-of-sale';
import { PointOfSaleRepository } from '../../domain/point-of-sale/point-of-sale.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PointOfSaleInfrastructure
  extends BaseInfrastructure<PointOfSale>
  implements PointOfSaleRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/point-of-sales');
  }
}
