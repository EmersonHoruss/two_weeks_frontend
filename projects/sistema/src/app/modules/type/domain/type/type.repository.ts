import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  TypeCreateDto,
  TypeShowDto,
  TypeUpdateDto,
} from '../../application/type/type.dto';

export interface TypeRepository
  extends BaseRepository<TypeCreateDto, TypeUpdateDto, TypeShowDto> {}
