import { Observable } from 'rxjs';
import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  ProductoCreateDto,
  ProductoShowDto,
  ProductoUpdateDto,
} from '../../application/producto/producto.dto';

export interface ProductoRepository
  extends BaseRepository<
    ProductoCreateDto,
    ProductoUpdateDto,
    ProductoShowDto
  > {
  delete(id: number): Observable<undefined>;
}
