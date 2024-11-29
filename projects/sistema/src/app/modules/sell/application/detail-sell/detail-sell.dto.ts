import { ProductShowDto } from '../../../product/application/product/product.dto';
import { SellShowDto } from '../sell/sell.dto';

export interface DetailSellCreateDto {
  price: number;
  amount: number;
  sellId: number;
  productId: number;
  totalPrice?: number;
}

export interface DetailSellUpdateDto {
  id: number;
  price?: number;
  amount?: number;
  sellId?: number;
  productId?: number;
  totalPrice?: number;
}

export interface DetailSellShowDto {
  id: number;
  price: number;
  amount: number;
  sell: SellShowDto;
  product: ProductShowDto;
  totalPrice: number;
}
