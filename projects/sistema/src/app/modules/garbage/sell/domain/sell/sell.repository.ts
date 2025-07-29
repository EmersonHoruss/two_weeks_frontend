import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  SellCreateDto,
  SellShowDto,
  SellUpdateDto,
} from '../../application/sell/sell.dto';

export interface SellRepository
  extends BaseRepository<SellCreateDto, SellUpdateDto, SellShowDto> {}
