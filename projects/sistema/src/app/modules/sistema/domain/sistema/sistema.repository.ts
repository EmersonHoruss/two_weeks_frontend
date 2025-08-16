import {
  SistemaCreateDto,
  SistemaShowDto,
  SistemaUpdateDto,
} from '../../application/sistema/sistema.dto';
import { BaseRepository } from '../../../../shared/domain/base.repository';

export interface SistemaRepository
  extends BaseRepository<SistemaCreateDto, SistemaUpdateDto, SistemaShowDto> {}
