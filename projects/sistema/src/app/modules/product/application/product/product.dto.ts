import { BrandShowDto } from '../brand/brand.dto';
import { SizeShowDto } from '../size/size.dto';
import { TypeShowDto } from '../type/type.dto';

export interface ProductCreateDto {
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  code?: string;
  typeId: number;
  brandId: number;
  sizeId: number;
}

export interface ProductUpdateDto {
  id: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  code?: string;
  typeId: number;
  brandId: number;
  sizeId: number;
}

export interface ProductShowDto {
  id: number;
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  name: string;
  code?: string;
  activated: boolean;
  type: TypeShowDto;
  brand: BrandShowDto;
  size: SizeShowDto;
}
