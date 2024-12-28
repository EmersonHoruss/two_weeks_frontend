export interface SubExceptionDto {
  field: string;
  message: string;
}

export interface ExceptionDto {
  timestamp: Date;
  message: string;
  path: string;
  statusCode: number;
  sign: string;
  errors: Array<SubExceptionDto>;
}

export const SIGN = 'DANIELITO_BACKEND';
