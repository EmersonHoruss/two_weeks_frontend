import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(
        (module) => module.InicioModule
      ),
  },
  {
    path: 'sistema',
    loadChildren: () =>
      import('./modules/sistema/sistema.module').then((m) => m.SistemaModule),
  },
  {
    path: 'caja',
    loadChildren: () =>
      import('./modules/caja/caja.module').then((module) => module.CajaModule),
  },
  {
    path: 'compras',
    loadChildren: () =>
      import('./modules/compras/compras.module').then((m) => m.ComprasModule),
  },

  {
    path: 'ventas',
    loadChildren: () =>
      import('./modules/ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: 'distribuidores',
    loadChildren: () =>
      import('./modules/distribuidores/distribuidores.module').then(
        (m) => m.DistribuidoresModule
      ),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./modules/reportes/reportes.module').then(
        (m) => m.ReportesModule
      ),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
];
