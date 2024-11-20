import { BaseApplication } from '../application/base.application';
import { IApplication } from '../application/base.interface';
import { MetaColumn } from '../interfaces/metacolumn.interface';

export abstract class BaseComponent<
  Entity,
  Application extends IApplication<Entity>
> {
  abstract listFields: string[];
  abstract metaColumns: MetaColumn[];

  quantityRecords: number;
  pageSize: number = 15;
  currentPage: number = 0;

  protected dataSource: any[] = [];

  constructor(protected readonly application: Application) {
    this.getRecordsBypage(0);
  }

  getRecordsBypage(page: number): void {
    const data = this.application.page(page);
    this.currentPage = page;
    console.log('uwu', this.currentPage);
    // this.dataSource = [
    //   ...this.dataOriginal.slice(
    //     page * this.pageSize,
    //     page * this.pageSize + this.pageSize
    //   ),
    // ];
  }
}
