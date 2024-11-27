export interface ProductCreateDto {
  type: string;
  brand: string;
  size: string;
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  code: string;
}

export interface ProductUpdateDto {
  id: number;
  type: string;
  brand: string;
  size: string;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  code: string;
}

export interface ProductActivatedDto {
  id: number;
  activated: boolean;
}

export interface ProductShowDto {
  id: number;
  type: string;
  brand: string;
  size: string;
  stock: number;
  purchasePrice: number;
  sellPriceNormal: number;
  sellPriceWholesale1: number;
  sellPriceWholesale2: number;
  name: string;
  code: string;
  activated: boolean;
}
