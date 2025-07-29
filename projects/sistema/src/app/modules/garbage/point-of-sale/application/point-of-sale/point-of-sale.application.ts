import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { PointOfSale } from '../../domain/point-of-sale/point-of-sale';
import { PointOfSaleRepository } from '../../domain/point-of-sale/point-of-sale.repository';
import { PointOfSaleInfrastructure } from '../../infrastructure/point-of-sale/point-of-sale.infrastructure';
import {
  PointOfSaleCreateDto,
  PointOfSaleShowDto,
  PointOfSaleUpdateDto,
} from './point-of-sale.dto';
import { PointOfSaleMapper } from './point-of-sale.mapper';

@Injectable()
export class PointOfSaleApplication extends BaseApplication<
  PointOfSale,
  PointOfSaleCreateDto,
  PointOfSaleUpdateDto,
  PointOfSaleShowDto,
  PointOfSaleRepository
> {
  constructor(
    @Inject(PointOfSaleInfrastructure)
    private readonly pointOfSaleRepository: PointOfSaleRepository,
    private readonly pointOfSaleMapper: PointOfSaleMapper
  ) {
    super(pointOfSaleRepository, pointOfSaleMapper);
  }
}
