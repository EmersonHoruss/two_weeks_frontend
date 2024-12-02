export enum Direction {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortRequestDto {
  field: string;
  direction: Direction;
}

export interface PageRequestDto {
  page: number;
  size: number;
}

export interface RequestDto {
  page?: PageRequestDto
  sort?: Array<SortRequestDto>;
  query?: string;
}
