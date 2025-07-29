import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PagePayComponent } from './views/pages/page-pay/page-pay.component';

const routes: Routes = [
  { path: '', component: PageListComponent },
  { path: 'comprar', component: PagePayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}
