import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PageRegistrarComponent } from './views/pages/page-registrar/page-registrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: '/listar', component: PageListComponent },
  { path: 'registrar', component: PageRegistrarComponent },
  { path: 'registrar/:id', component: PageRegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuidoresRoutingModule {}
