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
    { field: '#', title: '#', isVisible: true },
    { field: 'id', title: 'ID', isVisible: true },
    { field: 'type', title: 'Tipo', isVisible: true },
    { field: 'brand', title: 'Marca', isVisible: true },
    { field: 'size', title: 'Talla', isVisible: true },
    { field: 'stock', title: 'Stock', isVisible: true },
    { field: 'purchasePrice', title: 'Precio de compra', isVisible: true },
    { field: 'sellPriceNormal', title: 'Precio al por menor', isVisible: true },
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
    this.response={content:[
      {
        type: 'Electronics',
        brand: 'Samsung',
        size: 'Medium',
        stock: 50,
        purchasePrice: 100.0,
        sellPriceNormal: 150.0,
        sellPriceWholesale1: 140.0,
        sellPriceWholesale2: 130.0,
        name: 'Samsung TV',
        code: 'PRD001',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Sony',
        size: 'Large',
        stock: 30,
        purchasePrice: 200.0,
        sellPriceNormal: 300.0,
        sellPriceWholesale1: 280.0,
        sellPriceWholesale2: 270.0,
        name: 'Sony TV',
        code: 'PRD002',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'LG',
        size: 'Small',
        stock: 20,
        purchasePrice: 80.0,
        sellPriceNormal: 120.0,
        sellPriceWholesale1: 110.0,
        sellPriceWholesale2: 100.0,
        name: 'LG Fridge',
        code: 'PRD003',
        activated: true,
      },
      {
        type: 'Furniture',
        brand: 'Ikea',
        size: 'Large',
        stock: 10,
        purchasePrice: 150.0,
        sellPriceNormal: 220.0,
        sellPriceWholesale1: 200.0,
        sellPriceWholesale2: 190.0,
        name: 'Ikea Table',
        code: 'PRD004',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Apple',
        size: 'Small',
        stock: 15,
        purchasePrice: 500.0,
        sellPriceNormal: 600.0,
        sellPriceWholesale1: 580.0,
        sellPriceWholesale2: 570.0,
        name: 'Apple iPhone',
        code: 'PRD005',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Dell',
        size: 'Medium',
        stock: 40,
        purchasePrice: 300.0,
        sellPriceNormal: 400.0,
        sellPriceWholesale1: 380.0,
        sellPriceWholesale2: 370.0,
        name: 'Dell Laptop',
        code: 'PRD006',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'HP',
        size: 'Medium',
        stock: 25,
        purchasePrice: 250.0,
        sellPriceNormal: 350.0,
        sellPriceWholesale1: 330.0,
        sellPriceWholesale2: 320.0,
        name: 'HP Laptop',
        code: 'PRD007',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'Whirlpool',
        size: 'Large',
        stock: 12,
        purchasePrice: 400.0,
        sellPriceNormal: 550.0,
        sellPriceWholesale1: 530.0,
        sellPriceWholesale2: 510.0,
        name: 'Whirlpool Washing Machine',
        code: 'PRD008',
        activated: true,
      },
      {
        type: 'Furniture',
        brand: 'Ashley',
        size: 'Medium',
        stock: 20,
        purchasePrice: 90.0,
        sellPriceNormal: 150.0,
        sellPriceWholesale1: 140.0,
        sellPriceWholesale2: 130.0,
        name: 'Ashley Sofa',
        code: 'PRD009',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Lenovo',
        size: 'Small',
        stock: 18,
        purchasePrice: 220.0,
        sellPriceNormal: 300.0,
        sellPriceWholesale1: 290.0,
        sellPriceWholesale2: 280.0,
        name: 'Lenovo Tablet',
        code: 'PRD010',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Bose',
        size: 'Small',
        stock: 35,
        purchasePrice: 120.0,
        sellPriceNormal: 200.0,
        sellPriceWholesale1: 190.0,
        sellPriceWholesale2: 180.0,
        name: 'Bose Speaker',
        code: 'PRD011',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'Panasonic',
        size: 'Medium',
        stock: 22,
        purchasePrice: 100.0,
        sellPriceNormal: 150.0,
        sellPriceWholesale1: 140.0,
        sellPriceWholesale2: 130.0,
        name: 'Panasonic Microwave',
        code: 'PRD012',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Microsoft',
        size: 'Small',
        stock: 15,
        purchasePrice: 300.0,
        sellPriceNormal: 450.0,
        sellPriceWholesale1: 430.0,
        sellPriceWholesale2: 420.0,
        name: 'Microsoft Surface',
        code: 'PRD013',
        activated: true,
      },
      {
        type: 'Furniture',
        brand: 'Herman Miller',
        size: 'Medium',
        stock: 8,
        purchasePrice: 400.0,
        sellPriceNormal: 600.0,
        sellPriceWholesale1: 580.0,
        sellPriceWholesale2: 570.0,
        name: 'Herman Miller Chair',
        code: 'PRD014',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'Bosch',
        size: 'Large',
        stock: 10,
        purchasePrice: 350.0,
        sellPriceNormal: 500.0,
        sellPriceWholesale1: 480.0,
        sellPriceWholesale2: 470.0,
        name: 'Bosch Dishwasher',
        code: 'PRD015',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Philips',
        size: 'Medium',
        stock: 25,
        purchasePrice: 50.0,
        sellPriceNormal: 100.0,
        sellPriceWholesale1: 90.0,
        sellPriceWholesale2: 85.0,
        name: 'Philips Headphones',
        code: 'PRD016',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'Dyson',
        size: 'Medium',
        stock: 18,
        purchasePrice: 150.0,
        sellPriceNormal: 250.0,
        sellPriceWholesale1: 240.0,
        sellPriceWholesale2: 230.0,
        name: 'Dyson Vacuum',
        code: 'PRD017',
        activated: true,
      },
      {
        type: 'Furniture',
        brand: 'West Elm',
        size: 'Large',
        stock: 5,
        purchasePrice: 500.0,
        sellPriceNormal: 700.0,
        sellPriceWholesale1: 680.0,
        sellPriceWholesale2: 670.0,
        name: 'West Elm Bed',
        code: 'PRD018',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'Canon',
        size: 'Small',
        stock: 20,
        purchasePrice: 200.0,
        sellPriceNormal: 350.0,
        sellPriceWholesale1: 340.0,
        sellPriceWholesale2: 330.0,
        name: 'Canon Camera',
        code: 'PRD019',
        activated: true,
      },
      {
        type: 'Appliances',
        brand: 'GE',
        size: 'Large',
        stock: 8,
        purchasePrice: 400.0,
        sellPriceNormal: 600.0,
        sellPriceWholesale1: 580.0,
        sellPriceWholesale2: 570.0,
        name: 'GE Refrigerator',
        code: 'PRD020',
        activated: true,
      },
      {
        type: 'Electronics',
        brand: 'JBL',
        size: 'Small',
        stock: 35,
        purchasePrice: 60.0,
        sellPriceNormal: 120.0,
        sellPriceWholesale1: 110.0,
        sellPriceWholesale2: 100.0,
        name: 'JBL Speaker',
        code: 'PRD021',
        activated: true,
      },
    ]}
    // this.productApplication.list(this.requestDto).subscribe({
    //   next: (response: Response<Product>) => {
    //     console.log("reeeeees", response)
    //     this.response = response;
    //   },
    //   error: (error: ExceptionDto) => {},
    //   complete: () => {
    //     this.loading = false;
    //   },
    // });
  }

  paginate($event: PageRequestDto) {
    console.log($event)
    this.requestDto.page = $event;
    this.loadRecords();
  }

  get totalProducts(): number {
    return this.response?.totalElements ?? 0;
  }

  get dataSource(): Array<Product> {
    const products = this.response?.content;

    return !Array.isArray(products) || !products ? [] : products;
  }

  showModalWindow(row?: any) {
    console.log(this.response);
    // this.response = {}
  }

  delete(id?: number) {}
}