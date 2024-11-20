import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../../shared/infrastructure/base.infrastructure';
import { Sell } from '../domain/sell';
import { SellRepository } from '../domain/sell.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class SellInfrastructure
  extends BaseInfrastructure<Sell>
  implements SellRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/ventas');
  }
}
