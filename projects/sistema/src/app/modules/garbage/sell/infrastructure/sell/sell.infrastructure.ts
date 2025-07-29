import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { SellRepository } from '../../domain/sell/sell.repository';
import { Injectable } from '@angular/core';
import {
  SellCreateDto,
  SellShowDto,
  SellUpdateDto,
} from '../../application/sell/sell.dto';

@Injectable()
export class SellInfrastructure
  extends BaseInfrastructure<SellCreateDto, SellUpdateDto, SellShowDto>
  implements SellRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/sells');
  }
}
