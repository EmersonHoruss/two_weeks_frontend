import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  SistemaCreateDto,
  SistemaShowDto,
  SistemaUpdateDto,
} from '../../application/sistema/sistema.dto';
import { SistemaRepository } from '../../domain/sistema/sistema.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SistemaInfrastructure
  extends BaseInfrastructure<SistemaCreateDto, SistemaUpdateDto, SistemaShowDto>
  implements SistemaRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/sistemas');
  }
}
