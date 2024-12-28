import { HttpErrorResponse } from '@angular/common/http';
import { ExceptionDto, SIGN } from '../dtos/exception.dto';

export class ExceptionMapper {
  toExceptionDto(exception: HttpErrorResponse): ExceptionDto {
    const { error, status: statusCode } = exception;

    if (error && error?.sign === SIGN) {
      return {
        ...error,
        statusCode,
      };
    }

    return {
      timestamp: new Date(),
      message: 'Un error inesperado ha sucedido',
      statusCode,
      path: '/unknown',
      sign: 'unknown',
      errors: [],
    };
  }
}
