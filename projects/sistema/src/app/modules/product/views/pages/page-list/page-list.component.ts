import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import { UtilsService } from '../../../../../shared/services/utils.service';
import { ProductApplication } from '../../../application/product/product.application';
import {
  PageRequestDto,
  RequestDto,
} from '../../../../../shared/application/dtos/request.dto';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import { Product, ProductDisplay } from '../../../domain/product/product';
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
    { field: '#', title: '#', isVisible: true },
    {
      field: 'typeStr',
      title: 'Tipo',
      isVisible: true,
    },
    {
      field: 'brandStr',
      title: 'Marca',
      isVisible: true,
    },
    {
      field: 'sizeStr',
      title: 'Talla',
      isVisible: true,
    },
    {
      field: 'stock',
      title: 'Stock',
      isVisible: true,
    },
    {
      field: 'purchasePrice',
      title: 'Precio de compra',
      isVisible: true,
    },
    {
      field: 'sellPriceNormal',
      title: 'Precio al por menor',
      isVisible: true,
    },
    {
      field: 'sellPriceWholesale1',
      title: 'Precio al por mayor',
      isVisible: true,
    },
    {
      field: 'sellPriceWholesale2',
      title: 'Precio al super por mayor',
      isVisible: true,
    },
  ];

  requestDto: RequestDto;
  response: Response<Product>;

  loading: boolean;
  pluralEntity = 'productos';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly productApplication: ProductApplication
  ) {
    this.initializeRequestDto();
    this.loadData();
  }

  initializeRequestDto() {
    this.requestDto = {};
    this.requestDto.page = {
      page: environment.pageIndex,
      size: environment.pageSize,
    };
  }

  private loadData() {
    this.loading = true;

    setTimeout(() => {
      this.productApplication.list(this.requestDto).subscribe({
        next: (response: Response<Product>) => {
          this.response = response;
        },
        error: (error: ExceptionDto) => {
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }, 1000);
  }

  paginate($event: PageRequestDto) {
    if (this.requestDto.page === $event) return;

    this.requestDto.page = $event;
    this.loadData();
  }

  filter($event: string) {
    if (this.requestDto.query === $event) return;

    this.requestDto.query = $event;
    this.loadData();
  }

  get dataSource(): Array<ProductDisplay> {
    if (!this.response) return [];

    let { content: products, pageIndex, pageSize } = this.response;

    products = !Array.isArray(products) || !products ? [] : products;

    let i = pageIndex * pageSize;
    const productsDisplay = products.map((product: Product): ProductDisplay => {
      i++;
      const productDisplay: ProductDisplay = product.display();
      return { ...productDisplay, '#': i };
    });

    return productsDisplay;
  }

  showModalWindow(row?: any) {
    console.log(this.response);
    // this.response = {}
  }

  delete(id?: number) {}
}
