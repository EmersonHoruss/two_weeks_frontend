import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'caja',
    loadChildren: () =>
      import('./modules/point-of-sale/point-of-sale.module').then(
        (module) => module.PointOfSaleModule
      ),
  },
  {
    path: 'etiquetas',
    loadChildren: () =>
      import('./modules/label/label.module').then(
        (module) => module.LabelModule
      ),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/product/product.module').then(
        (module) => module.ProductModule
      ),
  },
  {
    path: 'tipos',
    loadChildren: () =>
      import('./modules/type/type.module').then((module) => module.TypeModule),
  },
  {
    path: 'marcas',
    loadChildren: () =>
      import('./modules/brand/brand.module').then(
        (module) => module.BrandModule
      ),
  },
  {
    path: 'tallas',
    loadChildren: () =>
      import('./modules/size/size.module').then((module) => module.SizeModule),
  },
  {
    path: 'ventas',
    loadChildren: () =>
      import('./modules/sell/sell.module').then((module) => module.SellModule),
  },
  {
    path: 'compras',
    loadChildren: () =>
      import('./modules/buy/buy.module').then((module) => module.BuyModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
];
