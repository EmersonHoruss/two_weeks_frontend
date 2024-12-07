export interface TypeCreateDto {
  name: string;
}

export interface TypeUpdateDto {
  id: number;
  name: string;
}

export interface TypeShowDto {
  id: number;
  name: string;
  activated: boolean;
}
