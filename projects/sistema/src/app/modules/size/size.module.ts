import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SizeRoutingModule
  ]
})
export class SizeModule { }
