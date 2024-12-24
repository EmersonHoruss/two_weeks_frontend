import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

import { UtilsService } from './services/utils.service';

import { DashNullPipe } from './pipes/dash-null/dash-null.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { InformativeComponent } from './components/informative/informative.component';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    DashNullPipe,
    AutocompleteComponent,
    LoadingComponent,
    InformativeComponent,
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
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
    MatSelectModule,
    ConfirmComponent,
    MatProgressSpinnerModule,
    DashNullPipe,
    AutocompleteComponent,
  ],
  providers: [UtilsService],
})
export class SharedModule {}
