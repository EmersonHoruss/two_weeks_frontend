import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Distribuidor } from '../../domain/distribuidor/distribuidor';
import {
  DistribuidorCreateDto,
  DistribuidorShowDto,
  DistribuidorUpdateDto,
} from './distribuidor.dto';
import { DistribuidorRepository } from '../../domain/distribuidor/distribuidor.repository';
import { DistribuidorInfrastructure } from '../../infraestructure/distribuidor/distribuidor.infrastructure';
import { DistribuidorMapper } from './distribuidor.mapper';
import { Observable } from 'rxjs';

@Injectable()
export class DistribuidorApplication extends BaseApplication<
  Distribuidor,
  DistribuidorCreateDto,
  DistribuidorUpdateDto,
  DistribuidorShowDto,
  DistribuidorRepository
> {
  constructor(
    @Inject(DistribuidorInfrastructure)
    private readonly distribuidorRepository: DistribuidorRepository,
    private readonly distribuidorMapper: DistribuidorMapper
  ) {
    super(distribuidorRepository, distribuidorMapper);
  }

  delete(id: number): Observable<undefined> {
    return this.distribuidorRepository.delete(id);
  }
}
