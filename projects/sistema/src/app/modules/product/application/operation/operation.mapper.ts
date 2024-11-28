import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Operation, OperationUpdate } from '../../domain/operation/operation';
import { ProductMapper } from '../product/product.mapper';
import {
  OperationCreateDto,
  OperationShowDto,
  OperationUpdateDto,
} from './operation.dto';

export class OperationMapper
  implements
    IMapper<
      Operation,
      OperationUpdate,
      OperationCreateDto,
      OperationUpdateDto,
      OperationShowDto
    >
{
  toEntity(showDto: OperationShowDto): Operation {
    return new Operation({
      id: showDto.id,
      type: showDto.type,
      amount: showDto.amount,
      date: showDto.date,
      product: new ProductMapper().toEntity(showDto.product),
    });
  }

  toCreateDto(operation: Operation): OperationCreateDto {
    const { type, amount, date, product } = operation.properties();
    const productId = product.properties().id;

    return {
      type,
      amount,
      date,
      product: productId,
    };
  }

  toUpdateDto(operation: Operation): OperationUpdateDto {
    return {};
  }
}
