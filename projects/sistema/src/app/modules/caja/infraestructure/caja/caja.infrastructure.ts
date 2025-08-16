import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  CajaCreateDto,
  CajaShowDto,
  CajaUpdateDto,
} from '../../application/caja/caja.dto';
import { HttpClient } from '@angular/common/http';
import { CajaRepository } from '../../domain/caja/caja.repository';
import { Observable } from 'rxjs';
import { ResponseDto } from '../../../../shared/application/dtos/response.dto';

@Injectable()
export class CajaInfrastructure
  extends BaseInfrastructure<CajaCreateDto, CajaUpdateDto, CajaShowDto>
  implements CajaRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/cajas');
  }

  override setActivation(
    id: number,
    activation: boolean
  ): Observable<null> {
    throw new Error('Method not supported for caja: setActivation');
  }
}
