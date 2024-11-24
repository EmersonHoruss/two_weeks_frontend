import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
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

const angular = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(),
];
const material = [{ provide: MatPaginatorIntl, useClass: PaginatorService }];
const layout = [{ provide: LAYOUT_TOKEN, useValue: layoutConstant }];
const infraestructure = [
  AuthInfrastructure,
  StorageInfrastructure,

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

  ProductApplication,
  OperationApplication,

  PointOfSaleApplication,

  CustomerApplication,
  DetailSellApplication,
  SellApplication,

  ProfileApplication,
  UserApplication,
];
const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];

export const appConfig: ApplicationConfig = {
  providers: [
    ...angular,
    ...material,
    ...layout,
    ...infraestructure,
    ...application,
    ...interceptors,
  ],
};
