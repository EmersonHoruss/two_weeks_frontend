import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import { UtilsService } from '../../../../../shared/services/utils.service';
import { ProductApplication } from '../../../application/product/product.application';
import {
  PageRequestDto,
  RequestDto,
} from '../../../../../shared/application/dtos/request.dto';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import { Product } from '../../../domain/product/product';
import { Response } from '../../../../../shared/domain/response';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'tw-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
  standalone: false,
})
export class PageListComponent {
  metaColumns: Array<MetaColumn> = [
    { field: '#', title: '#', isVisible: true, size: '20px' },
    { field: 'id', title: 'ID', isVisible: false, size: '20px' },
    {
      field: 'type',
      title: 'Tipo',
      isVisible: true,
      size: '40px',
    },
    {
      field: 'brand',
      title: 'Marca',
      isVisible: true,
      size: '40px',
    },
    {
      field: 'size',
      title: 'Talla',
      isVisible: true,
      size: '40px',
    },
    {
      field: 'stock',
      title: 'Stock',
      isVisible: true,
      size: '40px',
    },
    {
      field: 'purchasePrice',
      title: 'Precio de compra',
      isVisible: true,
      size: '100px',
    },
    {
      field: 'sellPriceNormal',
      title: 'Precio al por menor',
      isVisible: true,
      size: '100px',
    },
    {
      field: 'sellPriceWholesale1',
      title: 'Precio al por mayor',
      isVisible: true,
      size: '100px',
    },
    {
      field: 'sellPriceWholesale2',
      title: 'Precio al super por mayor',
      isVisible: true,
      size: '140px',
    },
  ];

  requestDto: RequestDto;
  response: Response<any>;

  loading: boolean;
  NO_RECORDS_MESSAGE = 'No hay productos';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly productApplication: ProductApplication
  ) {
    this.initializeRequestDto();
    this.loadRecords();
  }

  initializeRequestDto() {
    this.requestDto = {};
    this.requestDto.page = {
      page: environment.pageIndex,
      size: environment.pageSize,
    };
  }

  private loadRecords() {
    this.loading = true;

    setTimeout(() => {
      this.productApplication.list(this.requestDto).subscribe({
        next: (response: Response<Product>) => {
          this.response = response;
        },
        error: (error: ExceptionDto) => {},
        complete: () => {
          this.loading = false;
        },
      });
    }, 1000);
  }

  paginate($event: PageRequestDto) {
    this.requestDto.page = $event;
    this.loadRecords();
  }

  get dataSource(): Array<Product> {
    if (!this.response) return [];

    let { content: products, pageIndex, pageSize } = this.response;

    products = !Array.isArray(products) || !products ? [] : products;

    let i = pageIndex * pageSize;
    products = products.map((product: Product) => {
      i++;
      return { ...product, '#': i };
    });

    return products;
  }

  showModalWindow(row?: any) {
    console.log(this.response);
    // this.response = {}
  }

  delete(id?: number) {}
}
