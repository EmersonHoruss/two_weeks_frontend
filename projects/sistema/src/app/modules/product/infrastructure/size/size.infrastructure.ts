import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  SizeCreateDto,
  SizeShowDto,
  SizeUpdateDto,
} from '../../application/size/size.dto';
import { SizeRepository } from '../../domain/size/size.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SizeInfrastructure
  extends BaseInfrastructure<SizeCreateDto, SizeUpdateDto, SizeShowDto>
  implements SizeRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/sizes');
  }
}
