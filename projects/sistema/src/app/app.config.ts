import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorService } from './shared/services/paginator.service';
import { LAYOUT_TOKEN } from './config/injections/layout/tokens/layout.token';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';
import { AuthInfrastructure } from './core/infrastructure/auth.infrastructure';
import { AuthApplication } from './core/application/auth.application';
import { StorageInfrastructure } from './core/infrastructure/storage.infrastructure';
import { StorageApplication } from './core/application/storage.application';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { OperationInfrastructure } from './modules/product/infrastructure/operation/operation.infrastructure';
import { OperationApplication } from './modules/product/application/operation/operation.application';
import { ProductInfrastructure } from './modules/product/infrastructure/product/product.infrastructure';
import { ProductApplication } from './modules/product/application/product/product.application';
import { PointOfSaleInfrastructure } from './modules/point-of-sale/infrastructure/point-of-sale/point-of-sale.infrastructure';
import { PointOfSaleApplication } from './modules/point-of-sale/application/point-of-sale/point-of-sale.application';
import { CustomerInfrastructure } from './modules/sell/infrastructure/customer/customer.infrastructure';
import { DetailSellInfrastructure } from './modules/sell/infrastructure/detail-sell/detail-sell.infrastructure';
import { SellInfrastructure } from './modules/sell/infrastructure/sell/sell.infrastructure';
import { CustomerApplication } from './modules/sell/application/customer/customer.application';
import { DetailSellApplication } from './modules/sell/application/detail-sell/detail-sell.application';
import { SellApplication } from './modules/sell/application/sell/sell.application';
import { ProfileApplication } from './modules/user/application/profile/profile.application';
import { UserApplication } from './modules/user/application/user/user.application';
import { ProfileInfrastructure } from './modules/user/infrastructure/profile/profile.infrastructure';
import { UserInfrastructure } from './modules/user/infrastructure/user/user.infrastructure';
import { ProductMapper } from './modules/product/application/product/product.mapper';
import { PointOfSaleMapper } from './modules/point-of-sale/application/point-of-sale/point-of-sale.mapper';
import { OperationMapper } from './modules/product/application/operation/operation.mapper';
import { CustomerMapper } from './modules/sell/application/customer/customer.mapper';
import { DetailSellMapper } from './modules/sell/application/detail-sell/detail-sell.mapper';
import { SellMapper } from './modules/sell/application/sell/sell.mapper';
import { ProfileMapper } from './modules/user/application/profile/profile.mapper';
import { UserMapper } from './modules/user/application/user/user.mapper';
import { BrandApplication } from './modules/brand/application/brand/brand.application';
import { BrandMapper } from './modules/brand/application/brand/brand.mapper';
import { BrandInfrastructure } from './modules/brand/infrastructure/brand/brand.infrastructure';
import { SizeApplication } from './modules/size/application/size/size.application';
import { SizeMapper } from './modules/size/application/size/size.mapper';
import { SizeInfrastructure } from './modules/size/infrastructure/size/size.infrastructure';
import { TypeApplication } from './modules/type/application/type/type.application';
import { TypeMapper } from './modules/type/application/type/type.mapper';
import { TypeInfrastructure } from './modules/type/infrastructure/type/type.infrastructure';
import { ExceptionInterceptor } from './shared/interceptors/exception.interceptor';
import { ExceptionMapper } from './shared/application/mapper/exception.mapper';

const angular = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(withInterceptors([ExceptionInterceptor])),
];
const material = [{ provide: MatPaginatorIntl, useClass: PaginatorService }];
const layout = [{ provide: LAYOUT_TOKEN, useValue: layoutConstant }];
const infraestructure = [
  AuthInfrastructure,
  StorageInfrastructure,

  TypeInfrastructure,
  BrandInfrastructure,
  SizeInfrastructure,
  ProductInfrastructure,
  OperationInfrastructure,

  PointOfSaleInfrastructure,

  CustomerInfrastructure,
  DetailSellInfrastructure,
  SellInfrastructure,

  ProfileInfrastructure,
  UserInfrastructure,
];
const application = [
  AuthApplication,
  StorageApplication,

  TypeApplication,
  BrandApplication,
  SizeApplication,
  ProductApplication,
  OperationApplication,

  PointOfSaleApplication,

  CustomerApplication,
  DetailSellApplication,
  SellApplication,

  ProfileApplication,
  UserApplication,
];
const mappers = [
  ExceptionMapper,

  PointOfSaleMapper,

  TypeMapper,
  BrandMapper,
  SizeMapper,
  ProductMapper,
  OperationMapper,

  CustomerMapper,
  DetailSellMapper,
  SellMapper,

  ProfileMapper,
  UserMapper,
];

export const appConfig: ApplicationConfig = {
  providers: [
    ...angular,
    ...material,
    ...layout,
    ...infraestructure,
    ...application,
    ...mappers,
  ],
};
