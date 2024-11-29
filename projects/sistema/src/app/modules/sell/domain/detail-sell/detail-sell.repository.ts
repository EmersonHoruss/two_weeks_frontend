import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  DetailSellCreateDto,
  DetailSellShowDto,
  DetailSellUpdateDto,
} from '../../application/detail-sell/detail-sell.dto';

export interface DetailSellRepository
  extends BaseRepository<
    DetailSellCreateDto,
    DetailSellUpdateDto,
    DetailSellShowDto
  > {}
