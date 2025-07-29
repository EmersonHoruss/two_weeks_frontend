import { UserShowDto } from '../../../user/application/user/user.dto';
import { PaymentMethod, SellStatus } from '../../domain/sell/sell';
import { CustomerShowDto } from '../customer/customer.dto';

export interface SellCreateDto {
  sellerId: number;
  totalAmount?: number;
  date?: string;
  paymentMethod?: PaymentMethod;
  status?: SellStatus;
  debtCollectorId?: number;
  customerId?: number;
}

export interface SellUpdateDto {
  id: number;
  sellerId?: number;
  totalAmount?: number;
  date?: string;
  paymentMethod?: PaymentMethod;
  status?: SellStatus;
  debtCollectorId?: number;
  customerId?: number;
}

export interface SellShowDto {
  id: number;
  seller?: UserShowDto;
  totalAmount?: number;
  date?: string;
  paymentMethod?: PaymentMethod;
  status?: SellStatus;
  debtCollector?: UserShowDto;
  customer?: CustomerShowDto;
  activated: boolean;
}
