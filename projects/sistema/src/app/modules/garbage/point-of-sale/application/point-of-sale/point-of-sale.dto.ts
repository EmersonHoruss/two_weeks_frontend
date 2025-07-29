export interface PointOfSaleCreateDto {
  date: string;
  initialAmount: number;
  virtualAmount?: number;
  phisicalAmount?: number;
}

export interface PointOfSaleUpdateDto {
  id: number;
  date?: string;
  initialAmount?: number;
  virtualAmount?: number;
  phisicalAmount?: number;
}

export interface PointOfSaleShowDto {
  id: number;
  date: string;
  initialAmount: number;
  virtualAmount?: number;
  phisicalAmount?: number;
}
