import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import {
  BrandCreateDto,
  BrandShowDto,
  BrandUpdateDto,
} from '../../application/brand/brand.dto';
import { BrandRepository } from '../../domain/brand/brand.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BrandInfrastructure
  extends BaseInfrastructure<BrandCreateDto, BrandUpdateDto, BrandShowDto>
  implements BrandRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/brands');
  }

  delete(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/${id}`);
  }
}
