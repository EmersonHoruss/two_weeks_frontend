import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { LoginComponent } from './views/components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [
  HeaderComponent,
  SidebarComponent,
  MenuComponent,
  LoginComponent,
  PageLoginComponent,
];

const imports = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
];

const exports = [HeaderComponent, SidebarComponent, MenuComponent];

@NgModule({
  declarations,
  imports,
  exports,
})
export class CoreModule {}
