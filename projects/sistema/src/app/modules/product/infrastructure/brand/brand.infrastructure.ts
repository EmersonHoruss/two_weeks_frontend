import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  BrandCreateDto,
  BrandShowDto,
  BrandUpdateDto,
} from '../../application/brand/brand.dto';
import { BrandRepository } from '../../domain/brand/brand.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrandInfrastructure
  extends BaseInfrastructure<BrandCreateDto, BrandUpdateDto, BrandShowDto>
  implements BrandRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/brands');
  }
}
