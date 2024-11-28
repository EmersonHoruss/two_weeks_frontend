export interface PageResponseDto {
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
}

export interface PageableResponseDto {
  page: PageResponseDto;
  totalPages: number;
  totalElements: number;
}

export interface OrderResponseDto {
  property: string;
  direction: string;
}

export interface SortResponseDto {
  orders: Array<OrderResponseDto>;
}

export interface ResponseDto<ShowDto> {
  content: ShowDto | Array<ShowDto>;
  pageable: PageableResponseDto;
  sort: SortResponseDto;
  query: string;
}
