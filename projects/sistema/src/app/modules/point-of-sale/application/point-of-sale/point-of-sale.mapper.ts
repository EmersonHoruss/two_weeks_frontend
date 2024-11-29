import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { PointOfSale } from '../../domain/point-of-sale/point-of-sale';
import {
  PointOfSaleCreateDto,
  PointOfSaleShowDto,
  PointOfSaleUpdateDto,
} from './point-of-sale.dto';

export class PointOfSaleMapper
  implements
    IMapper<
      PointOfSale,
      PointOfSaleCreateDto,
      PointOfSaleUpdateDto,
      PointOfSaleShowDto
    >
{
  toEntity(showDto: PointOfSaleShowDto): PointOfSale {
    const { date, initialAmount, virtualAmount, phisicalAmount } = showDto;

    return new PointOfSale({
      date,
      initialAmount,
      virtualAmount,
      phisicalAmount,
    });
  }

  toCreateDto(entity: PointOfSale): PointOfSaleCreateDto {
    const { date, initialAmount, virtualAmount, phisicalAmount } =
      entity.properties();

    return { date, initialAmount, virtualAmount, phisicalAmount };
  }

  toUpdateDto(entity: PointOfSale): PointOfSaleUpdateDto {
    const { id, date, initialAmount, virtualAmount, phisicalAmount } =
      entity.properties();

    return { id, date, initialAmount, virtualAmount, phisicalAmount };
  }
}
