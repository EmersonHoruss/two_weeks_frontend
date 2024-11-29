import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { ProductMapper } from '../../../product/application/product/product.mapper';
import { DetailSell } from '../../domain/detail-sell/detail-sell';
import { SellMapper } from '../sell/sell.mapper';
import {
  DetailSellCreateDto,
  DetailSellShowDto,
  DetailSellUpdateDto,
} from './detail-sell.dto';

export class DetailSellMapper
  implements
    IMapper<
      DetailSell,
      DetailSellCreateDto,
      DetailSellUpdateDto,
      DetailSellShowDto
    >
{
  toEntity(showDto: DetailSellShowDto): DetailSell {
    const {
      id,
      price,
      amount,
      sell: sellShowDto,
      product: productShowDto,
      totalPrice,
    } = showDto;
    const sell = new SellMapper().toEntity(sellShowDto);
    const product = new ProductMapper().toEntity(productShowDto);

    return new DetailSell({
      id,
      price,
      amount,
      sell,
      product,
      totalPrice,
    });
  }

  toCreateDto(entity: DetailSell): DetailSellCreateDto {
    const { price, amount, sell, product, totalPrice } = entity.properties();
    const sellId = sell.properties().id;
    const productId = product.properties().id;

    return { price, amount, sellId, productId, totalPrice };
  }

  toUpdateDto(entity: DetailSell): DetailSellUpdateDto {
    const { id, price, amount, sell, product, totalPrice } =
      entity.properties();
    const sellId = sell.properties().id;
    const productId = product.properties().id;

    return { id, price, amount, sellId, productId, totalPrice };
  }
}
