import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'caja',
    loadChildren: () =>
      import('./modules/caja/caja.module').then((module) => module.CajaModule),
  },
  {
    path: 'distribuidores',
    loadChildren: () =>
      import('./modules/distribuidores/distribuidores.module').then(
        (m) => m.DistribuidoresModule
      ),
  },
  {
    path: 'compras',
    loadChildren: () =>
      import('./modules/compras/compras.module').then((m) => m.ComprasModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: 'ventas',
    loadChildren: () =>
      import('./modules/ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'sistema',
    loadChildren: () =>
      import('./modules/sistema/sistema.module').then((m) => m.SistemaModule),
  },
];
