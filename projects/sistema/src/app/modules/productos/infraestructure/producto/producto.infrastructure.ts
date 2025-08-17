import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { ProductoRepository } from '../../domain/producto/producto.repository';
import {
  ProductoCreateDto,
  ProductoShowDto,
  ProductoUpdateDto,
} from '../../application/producto/producto.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoInfrastructure
  extends BaseInfrastructure<
    ProductoCreateDto,
    ProductoUpdateDto,
    ProductoShowDto
  >
  implements ProductoRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/productos');
  }

  delete(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/${id}`);
  }
}
