import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PageRequestDto } from '../../application/dtos/request.dto';

@Component({
  selector: 'tw-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  standalone: false,
})
export class PaginatorComponent {
  @Input() length: number = 0;
  @Input() pageSize: number = 0;
  @Input() showFirstLastButtons: boolean = true;
  @Output() onChangePage: EventEmitter<PageRequestDto> = new EventEmitter();

  changePage(pageEvent: PageEvent) {
    const { pageIndex, pageSize } = pageEvent;
    const pageRequestDto = { page: pageIndex, size: pageSize };
    
    this.onChangePage.emit(pageRequestDto);
  }
}
