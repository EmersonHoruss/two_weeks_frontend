import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  TypeCreateDto,
  TypeShowDto,
  TypeUpdateDto,
} from '../../application/type/type.dto';
import { TypeRepository } from '../../domain/type/type.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TypeInfrastructure
  extends BaseInfrastructure<TypeCreateDto, TypeUpdateDto, TypeShowDto>
  implements TypeRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/types');
  }

  delete(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/${id}`);
  }
}
