import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ExceptionDto } from '../application/dtos/exception.dto';
import { ExceptionMapper } from '../application/mapper/exception.mapper';

export const ExceptionInterceptor: HttpInterceptorFn = (req, next) => {
  const exceptionMapper = inject(ExceptionMapper);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const exceptionDto: ExceptionDto = exceptionMapper.toExceptionDto(error);
      return throwError(() => exceptionDto);
    })
  );
};
