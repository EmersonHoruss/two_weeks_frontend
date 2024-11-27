import { ProductShowDto } from '../product/product.dto';

export interface OperationCreateDto {
  type: string;
  amount: number;
  date: Date;
  product: number;
}

export interface OperationShowDto {
  id: number;
  type: string;
  amount: number;
  date: Date;
  product: ProductShowDto;
}
