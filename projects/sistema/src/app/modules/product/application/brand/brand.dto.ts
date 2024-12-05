export interface BrandCreateDto {
  name: string;
}

export interface BrandUpdateDto {
  id: number;
  name: string;
}

export interface BrandShowDto {
  id: number;
  name: string;
  activated: boolean;
}
