export enum Direction {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortRequestDto {
  field: string;
  direction: Direction;
}

export interface RequestDto {
  page: number;
  size: number;
  sort: Array<SortRequestDto>;
  query: string;
}
