import { BaseRepository } from '../../../../shared/domain/base.repository';
import { Customer } from './customer';

export interface CustomerRepository extends BaseRepository<Customer> {}
