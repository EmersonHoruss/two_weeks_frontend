import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Injectable } from '@angular/core';
import { DetailSellRepository } from '../../domain/detail-sell/detail-sell.repository';
import { DetailSell } from '../../domain/detail-sell/detail-sell';

@Injectable()
export class DetailSellInfrastructure
  extends BaseInfrastructure<DetailSell>
  implements DetailSellRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/detail-sells');
  }
}
