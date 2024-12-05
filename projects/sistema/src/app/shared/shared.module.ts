import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UtilsService } from './services/utils.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashNullPipe } from './pipes/dash-null/dash-null.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    DashNullPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    TitleComponent,
    MatIconModule,
    MatButtonModule,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    ConfirmComponent,
    MatProgressSpinnerModule,
    DashNullPipe,
  ],
  providers: [UtilsService],
})
export class SharedModule {}
