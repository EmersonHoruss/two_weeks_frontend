import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { PointOfSale } from '../../domain/point-of-sale/point-of-sale';
import { PointOfSaleRepository } from '../../domain/point-of-sale/point-of-sale.repository';
import { PointOfSaleInfrastructure } from '../../infrastructure/point-of-sale/point-of-sale.infrastructure';

@Injectable()
export class PointOfSaleApplication extends BaseApplication<
  PointOfSale,
  PointOfSaleRepository
> {
  constructor(
    @Inject(PointOfSaleInfrastructure)
    private readonly pointOfSaleRepository: PointOfSaleRepository
  ) {
    super(pointOfSaleRepository);
  }
}
