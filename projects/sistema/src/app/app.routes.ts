import { Routes } from '@angular/router';
import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./user/user.module').then((module) => module.UserModule),
  // },
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./user/user.module').then((module) => module.UserModule),
  //   // canLoad: [AuthenticationGuard],
  // },
];
