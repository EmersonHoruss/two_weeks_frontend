export interface PageDto {
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
}

export interface PageableDto {
  page: PageDto;
  totalPages: number;
  totalElements: number;
}

export interface OrderDto {
  property: string;
  direction: string;
}

export interface SortDto {
  orders: Array<OrderDto>;
}

export interface ResponseDto {
  content: any;
  pageable: PageableDto;
  sort: SortDto;
  query: string;
}
