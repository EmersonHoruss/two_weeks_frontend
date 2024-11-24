import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Customer } from '../../domain/customer/customer';
import { CustomerRepository } from '../../domain/customer/customer.repository';
import { CustomerInfrastructure } from '../../infrastructure/customer/customer.infrastructure';

@Injectable()
export class CustomerApplication extends BaseApplication<Customer, CustomerRepository> {
  constructor(
    @Inject(CustomerInfrastructure) private readonly customerRepository: CustomerRepository
  ) {
    super(customerRepository);
  }
}
