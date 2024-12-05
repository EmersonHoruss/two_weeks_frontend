import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Brand } from '../../domain/brand/brand';
import { BrandCreateDto, BrandShowDto, BrandUpdateDto } from './brand.dto';
import { BrandRepository } from '../../domain/brand/brand.repository';
import { BrandInfrastructure } from '../../infrastructure/brand/brand.infrastructure';
import { BrandMapper } from './brand.mapper';

@Injectable()
export class BrandApplication extends BaseApplication<
  Brand,
  BrandCreateDto,
  BrandUpdateDto,
  BrandShowDto,
  BrandRepository
> {
  constructor(
    @Inject(BrandInfrastructure)
    private readonly brandRepository: BrandRepository,
    private readonly brandMapper: BrandMapper
  ) {
    super(brandRepository, brandMapper);
  }
}
