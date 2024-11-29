import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Customer } from '../../domain/customer/customer';
import { CustomerRepository } from '../../domain/customer/customer.repository';
import { CustomerInfrastructure } from '../../infrastructure/customer/customer.infrastructure';
import {
  CustomerCreateDto,
  CustomerShowDto,
  CustomerUpdateDto,
} from './customer.dto';
import { CustomerMapper } from './customer.mapper';

@Injectable()
export class CustomerApplication extends BaseApplication<
  Customer,
  CustomerCreateDto,
  CustomerUpdateDto,
  CustomerShowDto,
  CustomerRepository
> {
  constructor(
    @Inject(CustomerInfrastructure)
    private readonly customerRepository: CustomerRepository,
    private readonly customerMapper: CustomerMapper
  ) {
    super(customerRepository, customerMapper);
  }
}
