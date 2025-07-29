import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Customer } from '../../domain/customer/customer';
import {
  CustomerCreateDto,
  CustomerShowDto,
  CustomerUpdateDto,
} from './customer.dto';

@Injectable()
export class CustomerMapper
  implements
    IMapper<Customer, CustomerCreateDto, CustomerUpdateDto, CustomerShowDto>
{
  toEntity(showDto: CustomerShowDto): Customer {
    const { id, identity, identityType, name } = showDto;

    return new Customer({ id, identity, identityType, name });
  }

  toCreateDto(entity: Customer): CustomerCreateDto {
    const { identity, identityType, name } = entity.properties();

    return { identity, identityType, name };
  }

  toUpdateDto(entity: Customer): CustomerUpdateDto {
    const { id, identity, identityType, name } = entity.properties();

    return { id, identity, identityType, name };
  }
}
