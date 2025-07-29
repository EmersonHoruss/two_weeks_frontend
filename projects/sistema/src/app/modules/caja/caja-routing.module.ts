import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PageRegistrarComponent } from './views/pages/page-registrar/page-registrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'historia', pathMatch: 'full' },
  { path: 'historia', component: PageListComponent },
  { path: 'abrir', component: PageRegistrarComponent },
  { path: 'cerrar/:id', component: PageRegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaRoutingModule {}
