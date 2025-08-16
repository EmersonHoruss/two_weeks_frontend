import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PageOpenComponent } from './views/pages/page-open/page-open.component';
import { PageUpdateComponent } from './views/pages/page-update/page-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'historial', pathMatch: 'full' },
  { path: 'historial', component: PageListComponent },
  { path: 'abrir', component: PageOpenComponent },
  { path: 'actualizar/:id', component: PageUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaRoutingModule {}
