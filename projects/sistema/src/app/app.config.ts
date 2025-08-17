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

import { ExceptionInterceptor } from './shared/interceptors/exception.interceptor';
import { ExceptionMapper } from './shared/application/mapper/exception.mapper';
import { CajaApplication } from './modules/caja/application/caja/caja.application';
import { CajaInfrastructure } from './modules/caja/infraestructure/caja/caja.infrastructure';
import { CajaMapper } from './modules/caja/application/caja/caja.mapper';
import { SistemaApplication } from './modules/sistema/application/sistema/sistema.application';
import { SistemaMapper } from './modules/sistema/application/sistema/sistema.mapper';
import { SistemaInfrastructure } from './modules/sistema/infraestructure/sistema/sistema.infrastructure';
import { DistribuidorInfrastructure } from './modules/distribuidores/infraestructure/distribuidor/distribuidor.infrastructure';
import { DistribuidorApplication } from './modules/distribuidores/application/distribuidor/distribuidor.application';
import { DistribuidorMapper } from './modules/distribuidores/application/distribuidor/distribuidor.mapper';
import { ProductoInfrastructure } from './modules/productos/infraestructure/producto/producto.infrastructure';
import { ProductoApplication } from './modules/productos/application/producto/producto.application';
import { ProductoMapper } from './modules/productos/application/producto/producto.mapper';

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

  CajaInfrastructure,
  SistemaInfrastructure,
  DistribuidorInfrastructure,
  ProductoInfrastructure,
];
const application = [
  AuthApplication,
  StorageApplication,

  CajaApplication,
  SistemaApplication,
  DistribuidorApplication,
  ProductoApplication,
];
const mappers = [
  ExceptionMapper,

  CajaMapper,
  SistemaMapper,
  DistribuidorMapper,
  ProductoMapper,
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
