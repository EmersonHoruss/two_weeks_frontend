import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PagePayComponent } from './views/pages/page-pay/page-pay.component';

@NgModule({
  declarations: [FormComponent, PageListComponent, PagePayComponent],
  imports: [CommonModule, BuyRoutingModule],
})
export class BuyModule {}
