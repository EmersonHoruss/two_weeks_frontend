import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { UserMapper } from '../../../user/application/user/user.mapper';
import { Sell } from '../../domain/sell/sell';
import { CustomerMapper } from '../customer/customer.mapper';
import { SellCreateDto, SellShowDto, SellUpdateDto } from './sell.dto';

@Injectable()
export class SellMapper
  implements IMapper<Sell, SellCreateDto, SellUpdateDto, SellShowDto>
{
  toEntity(showDto: SellShowDto): Sell {
    const {
      id,
      seller: sellerShowDto,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollector: debtCollectorShowDto,
      customer: customerShowDto,
      activated,
    } = showDto;
    const seller = new UserMapper().toEntity(sellerShowDto);
    const debtCollector = new UserMapper().toEntity(debtCollectorShowDto);
    const customer = new CustomerMapper().toEntity(customerShowDto);

    return new Sell({
      id,
      seller,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollector,
      customer,
      activated,
    });
  }

  toCreateDto(entity: Sell): SellCreateDto {
    const {
      seller,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollector,
      customer,
    } = entity.properties();
    const sellerId = seller.properties().id;
    const debtCollectorId = debtCollector.properties().id;
    const customerId = customer.properties().id;
    
    return {
      sellerId,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollectorId,
      customerId,
    };
  }

  toUpdateDto(entity: Sell): SellUpdateDto {
    const {
      id,
      seller,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollector,
      customer,
    } = entity.properties();
    const sellerId = seller.properties().id;
    const debtCollectorId = debtCollector.properties().id;
    const customerId = customer.properties().id;

    return {
      id,
      sellerId,
      totalAmount,
      date,
      paymentMethod,
      status,
      debtCollectorId,
      customerId,
    };
  }
}
