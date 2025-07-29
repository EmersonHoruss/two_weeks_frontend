import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { PointOfSaleRepository } from '../../domain/point-of-sale/point-of-sale.repository';
import { HttpClient } from '@angular/common/http';
import {
  PointOfSaleCreateDto,
  PointOfSaleShowDto,
  PointOfSaleUpdateDto,
} from '../../application/point-of-sale/point-of-sale.dto';

@Injectable()
export class PointOfSaleInfrastructure
  extends BaseInfrastructure<
    PointOfSaleCreateDto,
    PointOfSaleUpdateDto,
    PointOfSaleShowDto
  >
  implements PointOfSaleRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/point_of_sales');
  }
}
