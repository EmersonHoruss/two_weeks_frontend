import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  ProductCreateDto,
  ProductShowDto,
  ProductUpdateDto,
} from '../../application/product/product.dto';

export interface ProductRepository
  extends BaseRepository<ProductCreateDto, ProductUpdateDto, ProductShowDto> {}
