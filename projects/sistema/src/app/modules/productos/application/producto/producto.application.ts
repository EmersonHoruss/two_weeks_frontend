import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Producto } from '../../domain/producto/producto';
import {
  ProductoCreateDto,
  ProductoShowDto,
  ProductoUpdateDto,
} from './producto.dto';
import { ProductoRepository } from '../../domain/producto/producto.repository';
import { ProductoInfrastructure } from '../../infraestructure/producto/producto.infrastructure';
import { ProductoMapper } from './producto.mapper';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoApplication extends BaseApplication<
  Producto,
  ProductoCreateDto,
  ProductoUpdateDto,
  ProductoShowDto,
  ProductoRepository
> {
  constructor(
    @Inject(ProductoInfrastructure)
    private readonly productoRepository: ProductoRepository,
    private readonly productoMapper: ProductoMapper
  ) {
    super(productoRepository, productoMapper);
  }

  delete(id: number): Observable<undefined> {
    return this.productoRepository.delete(id);
  }
}
