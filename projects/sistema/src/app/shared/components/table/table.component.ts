import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MetaColumn } from '../../interfaces/metacolumn.interface';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'tw-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false,
})
export class TableComponent implements OnInit {
  listFields: string[] = [];
  @Input() metaColumns: MetaColumn[] = [];
  @Input() dataSource: any[] = [];

  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metaColumns']) {
      this.listFields = this.metaColumns.map((item) => item.field);
    }
  }

  ngAfterContentInit(): void {
    if (!this.columnsDef) return;

    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }

  selectRow(row: any) {}
}
