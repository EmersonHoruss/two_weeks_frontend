import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Items per page';
  override nextPageLabel = 'next page';
  override previousPageLabel = 'previous page';
  override firstPageLabel = 'first page';
  override lastPageLabel = 'last page';
  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length);
    const start = page * pageSize;
    const end = start < length ? Math.min(start, length) : start + pageSize;
    return `${start + 1} - ${end} of ${length}`;
  };
}
