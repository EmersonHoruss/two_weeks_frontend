import { Observable } from 'rxjs';
import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  BrandCreateDto,
  BrandShowDto,
  BrandUpdateDto,
} from '../../application/brand/brand.dto';

export interface BrandRepository
  extends BaseRepository<BrandCreateDto, BrandUpdateDto, BrandShowDto> {
  delete(id: number): Observable<undefined>;
}
