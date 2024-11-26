import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'tw-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
  standalone: false,
})
export class PageListComponent {
  metaColumns: Array<MetaColumn> = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
  ];
  dataSource: Array<any>;
  quantityRecords: number;
  pageSize: number;

  constructor() {}

  showModalWindow(row?: any) {}

  delete(id?: number) {}

  getRecordsByPage(event: any) {}
}
