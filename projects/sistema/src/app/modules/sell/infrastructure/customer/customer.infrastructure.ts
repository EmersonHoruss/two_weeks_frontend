import { HttpClient } from '@angular/common/http';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Injectable } from '@angular/core';
import { CustomerRepository } from '../../domain/customer/customer.repository';
import {
  CustomerCreateDto,
  CustomerShowDto,
  CustomerUpdateDto,
} from '../../application/customer/customer.dto';

@Injectable()
export class CustomerInfrastructure
  extends BaseInfrastructure<
    CustomerCreateDto,
    CustomerUpdateDto,
    CustomerShowDto
  >
  implements CustomerRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/customers');
  }
}
