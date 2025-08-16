import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { PageRegistrarComponent } from './views/pages/page-registrar/page-registrar.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { SharedModule } from '../../shared/shared.module';

const components = [];
const pages = [PageRegistrarComponent, PageListComponent];
const declarations = [...components, ...pages];
const imports = [CommonModule, CajaRoutingModule, SharedModule];
const providers = [];

@NgModule({
  declarations,
  imports,
  providers,
})
export class CajaModule {}
