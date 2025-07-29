import { Observable } from 'rxjs';
import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  SizeCreateDto,
  SizeShowDto,
  SizeUpdateDto,
} from '../../application/size/size.dto';

export interface SizeRepository
  extends BaseRepository<SizeCreateDto, SizeUpdateDto, SizeShowDto> {
  delete(id: number): Observable<undefined>;
}
