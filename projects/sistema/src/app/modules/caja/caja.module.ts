import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { SharedModule } from '../../shared/shared.module';
import { PageOpenComponent } from './views/pages/page-open/page-open.component';
import { PageUpdateComponent } from './views/pages/page-update/page-update.component';

const components = [];
const pages = [PageOpenComponent, PageUpdateComponent, PageListComponent];
const declarations = [...components, ...pages];
const imports = [CommonModule, CajaRoutingModule, SharedModule];
const providers = [];

@NgModule({
  declarations,
  imports,
  providers,
})
export class CajaModule {}
