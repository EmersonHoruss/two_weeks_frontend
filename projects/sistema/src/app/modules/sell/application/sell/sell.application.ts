import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Sell } from '../../domain/sell/sell';
import { SellRepository } from '../../domain/sell/sell.repository';
import { SellInfrastructure } from '../../infrastructure/sell/sell.infrastructure';
import { SellCreateDto, SellShowDto, SellUpdateDto } from './sell.dto';
import { SellMapper } from './sell.mapper';

@Injectable()
export class SellApplication extends BaseApplication<
  Sell,
  SellCreateDto,
  SellUpdateDto,
  SellShowDto,
  SellRepository
> {
  constructor(
    @Inject(SellInfrastructure) private readonly sellRepository: SellRepository,
    private readonly sellMapper: SellMapper
  ) {
    super(sellRepository, sellMapper);
  }
}
