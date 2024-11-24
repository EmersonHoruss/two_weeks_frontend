import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Injectable } from '@angular/core';
import { CustomerRepository } from '../../domain/customer/customer.repository';
import { Customer } from '../../domain/customer/customer';

@Injectable()
export class CustomerInfrastructure
  extends BaseInfrastructure<Customer>
  implements CustomerRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/customers');
  }
}
