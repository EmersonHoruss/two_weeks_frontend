import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Caja } from '../../domain/caja/caja';
import { CajaCreateDto, CajaShowDto, CajaUpdateDto } from './caja.dto';
import { CajaRepository } from '../../domain/caja/caja.repository';
import { CajaInfrastructure } from '../../infraestructure/caja/caja.infrastructure';
import { CajaMapper } from './caja.mapper';

@Injectable()
export class CajaApplication extends BaseApplication<
  Caja,
  CajaCreateDto,
  CajaUpdateDto,
  CajaShowDto,
  CajaRepository
> {
  constructor(
    @Inject(CajaInfrastructure)
    private readonly cajaRepository: CajaRepository,
    private readonly cajaMapper: CajaMapper
  ) {
    super(cajaRepository, cajaMapper);
  }
}
