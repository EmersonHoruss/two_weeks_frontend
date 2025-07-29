import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { DetailSellRepository } from '../../domain/detail-sell/detail-sell.repository';
import { DetailSell } from '../../domain/detail-sell/detail-sell';
import { DetailSellInfrastructure } from '../../infrastructure/detail-sell/detail-sell.infrastructure';
import {
  DetailSellCreateDto,
  DetailSellShowDto,
  DetailSellUpdateDto,
} from './detail-sell.dto';
import { DetailSellMapper } from './detail-sell.mapper';

@Injectable()
export class DetailSellApplication extends BaseApplication<
  DetailSell,
  DetailSellCreateDto,
  DetailSellUpdateDto,
  DetailSellShowDto,
  DetailSellRepository
> {
  constructor(
    @Inject(DetailSellInfrastructure)
    private readonly detailSellRepository: DetailSellRepository,
    private readonly detailSellMapper: DetailSellMapper
  ) {
    super(detailSellRepository, detailSellMapper);
  }
}
