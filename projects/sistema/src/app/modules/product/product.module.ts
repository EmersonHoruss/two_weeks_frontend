import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { ProductInfrastructure } from './infrastructure/product/product.infrastructure';

const declarations = [FormComponent, PageListComponent];
const imports = [CommonModule, ProductRoutingModule, SharedModule];
const providers = [ProductInfrastructure];

@NgModule({
  declarations,
  imports,
  providers,
})
export class ProductModule {}
