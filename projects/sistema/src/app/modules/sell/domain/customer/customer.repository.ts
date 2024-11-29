import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  CustomerCreateDto,
  CustomerShowDto,
  CustomerUpdateDto,
} from '../../application/customer/customer.dto';

export interface CustomerRepository
  extends BaseRepository<
    CustomerCreateDto,
    CustomerUpdateDto,
    CustomerShowDto
  > {}
