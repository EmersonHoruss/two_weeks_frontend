import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../../shared/shared.module';

const components = [FormComponent];
const pages = [PageListComponent];
const declarations = [...components, ...pages];
const imports = [CommonModule, SizeRoutingModule, SharedModule];
const providers = [];

@NgModule({
  declarations,
  imports,
  providers,
})
export class SizeModule {}
