import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  CajaCreateDto,
  CajaUpdateDto,
  CajaShowDto,
} from '../../application/caja/caja.dto';

export interface CajaRepository
  extends BaseRepository<CajaCreateDto, CajaUpdateDto, CajaShowDto> {}
