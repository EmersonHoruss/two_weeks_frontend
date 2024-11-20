import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../shared/application/base.application';
import { Sell } from '../domain/sell';
import { SellRepository } from '../domain/sell.repository';
import { SellInfrastructure } from '../infrastructure/sell.infrastructure';

@Injectable()
export class SellApplication extends BaseApplication<Sell, SellRepository> {
  constructor(
    @Inject(SellInfrastructure) private readonly sellRepository: SellRepository
  ) {
    super(sellRepository);
  }
}
