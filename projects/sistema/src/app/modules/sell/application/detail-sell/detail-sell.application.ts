import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { DetailSellRepository } from '../../domain/detail-sell/detail-sell.repository';
import { DetailSell } from '../../domain/detail-sell/detail-sell';
import { DetailSellInfrastructure } from '../../infrastructure/detail-sell/detail-sell.infrastructure';

@Injectable()
export class DetailSellApplication extends BaseApplication<
  DetailSell,
  DetailSellRepository
> {
  constructor(
    @Inject(DetailSellInfrastructure)
    private readonly detailSellRepository: DetailSellRepository
  ) {
    super(detailSellRepository);
  }
}
