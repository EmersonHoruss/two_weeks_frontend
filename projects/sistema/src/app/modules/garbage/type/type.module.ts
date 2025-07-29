import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../../shared/shared.module';
import { FiltersComponent } from './views/components/filters/filters.component';
import { PageListGarbageComponent } from './views/pages/page-list-garbage/page-list-garbage.component';

const components = [FormComponent, FiltersComponent];
const pages = [PageListComponent, PageListGarbageComponent];
const declarations = [...components, ...pages];
const imports = [CommonModule, TypeRoutingModule, SharedModule];
const providers = [];

@NgModule({
  declarations,
  imports,
  providers,
})
export class TypeModule {}
