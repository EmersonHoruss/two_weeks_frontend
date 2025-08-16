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
];
const application = [
  AuthApplication, 
  StorageApplication, 
  
  CajaApplication,
  SistemaApplication,
];
const mappers = [
  ExceptionMapper,

  CajaMapper,
  SistemaMapper,
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
