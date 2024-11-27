export interface ExceptionDto {
  timestamp: Date;
  message: string;
  path: string;
  errors: Array<SubExceptionDto>;
}

export interface SubExceptionDto {
  field: string;
  message: string;
}
