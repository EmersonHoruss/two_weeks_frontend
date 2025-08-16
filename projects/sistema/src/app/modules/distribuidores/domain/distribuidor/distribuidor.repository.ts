import { Observable } from 'rxjs';
import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  DistribuidorCreateDto,
  DistribuidorShowDto,
  DistribuidorUpdateDto,
} from '../../application/distribuidor/distribuidor.dto';

export interface DistribuidorRepository
  extends BaseRepository<
    DistribuidorCreateDto,
    DistribuidorUpdateDto,
    DistribuidorShowDto
  > {
  delete(id: number): Observable<undefined>;
}
