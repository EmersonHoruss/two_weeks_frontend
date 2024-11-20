import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'amb-paginator',
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.scss',
    standalone: false
})
export class PaginatorComponent {
  @Input() length: number = 0;
  @Input() pageSize: number = 0;
  @Input() showFirstLastButtons: boolean = true;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  changePage(pageEvent: PageEvent) {
    this.onChangePage.emit(pageEvent.pageIndex);
  }
}
