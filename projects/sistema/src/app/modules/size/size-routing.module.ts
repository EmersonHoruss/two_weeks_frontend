import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { PageListGarbageComponent } from './views/pages/page-list-garbage/page-list-garbage.component';

const routes: Routes = [
  { path: '', component: PageListComponent },
  { path: 'eliminadas', component: PageListGarbageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeRoutingModule {}
