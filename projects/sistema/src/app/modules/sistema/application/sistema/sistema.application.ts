import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Sistema } from '../../domain/sistema/sistema';
import {
  SistemaCreateDto,
  SistemaShowDto,
  SistemaUpdateDto,
} from './sistema.dto';
import { SistemaRepository } from '../../domain/sistema/sistema.repository';
import { SistemaInfrastructure } from '../../infraestructure/sistema/sistema.infrastructure';
import { SistemaMapper } from './sistema.mapper';

@Injectable()
export class SistemaApplication extends BaseApplication<
  Sistema,
  SistemaCreateDto,
  SistemaUpdateDto,
  SistemaShowDto,
  SistemaRepository
> {
  constructor(
    @Inject(SistemaInfrastructure)
    private readonly sistemaRepository: SistemaRepository,
    private readonly sistemaMapper: SistemaMapper
  ) {
    super(sistemaRepository, sistemaMapper);
  }
}
