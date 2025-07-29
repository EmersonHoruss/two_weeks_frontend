import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PageCollectComponent } from './views/pages/page-collect/page-collect.component';
import { PageSellComponent } from './views/pages/page-sell/page-sell.component';

const routes: Routes = [
  { path: '', component: PageListComponent },
  { path: 'vender', component: PageSellComponent },
  { path: 'cobrar', component: PageCollectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellRoutingModule {}
