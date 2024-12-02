import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Items por página';
  override nextPageLabel = 'siguiente página';
  override previousPageLabel = 'anterior página';
  override firstPageLabel = 'primera página';
  override lastPageLabel = 'última página';
  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }

    const start = page * pageSize + 1;
    const end = Math.min((page + 1) * pageSize, length);

    return `${start} - ${end} de ${length}`;
  };
}
