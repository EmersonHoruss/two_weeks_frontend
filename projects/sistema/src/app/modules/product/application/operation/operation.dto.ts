import { OperationType } from '../../domain/operation/operation';
import { ProductShowDto } from '../product/product.dto';

export interface OperationCreateDto {
  type: OperationType;
  amount: number;
  date: string;
  product: number;
}

export interface OperationUpdateDto {}

export interface OperationShowDto {
  id: number;
  type: OperationType;
  amount: number;
  date: string;
  product: ProductShowDto;
}
