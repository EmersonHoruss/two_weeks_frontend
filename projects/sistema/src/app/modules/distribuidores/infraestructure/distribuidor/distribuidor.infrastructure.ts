import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  DistribuidorCreateDto,
  DistribuidorShowDto,
  DistribuidorUpdateDto,
} from '../../application/distribuidor/distribuidor.dto';
import { DistribuidorRepository } from '../../domain/distribuidor/distribuidor.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DistribuidorInfrastructure
  extends BaseInfrastructure<
    DistribuidorCreateDto,
    DistribuidorUpdateDto,
    DistribuidorShowDto
  >
  implements DistribuidorRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/distribuidores');
  }

  delete(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/${id}`);
  }
}
