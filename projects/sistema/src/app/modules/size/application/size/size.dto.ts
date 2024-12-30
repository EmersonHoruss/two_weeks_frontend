export interface SizeCreateDto {
  name: string;
}

export interface SizeUpdateDto {
  id: number;
  name: string;
}

export interface SizeShowDto {
  id: number;
  name: string;
  code: string;
  activated: boolean;
}
