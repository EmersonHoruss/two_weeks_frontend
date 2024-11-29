import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  PointOfSaleCreateDto,
  PointOfSaleShowDto,
  PointOfSaleUpdateDto,
} from '../../application/point-of-sale/point-of-sale.dto';

export interface PointOfSaleRepository
  extends BaseRepository<
    PointOfSaleCreateDto,
    PointOfSaleUpdateDto,
    PointOfSaleShowDto
  > {}
