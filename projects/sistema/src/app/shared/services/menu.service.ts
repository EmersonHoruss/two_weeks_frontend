import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  url: string;
  icon: string;
  foreignToMaterial: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Menu[];

  constructor() {
    this.menu = [
      {
        title: 'Caja',
        url: '/caja',
        icon: 'point_of_sale',
        foreignToMaterial: false,
      },
      {
        title: 'Etiquetas',
        url: '/etiquetas',
        icon: 'label',
        foreignToMaterial: false,
      },
      {
        title: 'Productos',
        url: '/productos',
        icon: 'inventory_2',
        foreignToMaterial: false,
      },
      {
        title: 'Tipos',
        url: '/tipos',
        icon: 'category',
        foreignToMaterial: false,
      },
      {
        title: 'Marcas',
        url: '/marcas',
        icon: 'verified',
        foreignToMaterial: false,
      },
      {
        title: 'Tallas',
        url: '/tallas',
        icon: 'straighten',
        foreignToMaterial: false,
      },
      {
        title: 'Vender',
        url: '/ventas/vender',
        icon: 'shopping_cart',
        foreignToMaterial: false,
      },
      {
        title: 'Cobrar',
        url: '/ventas/cobrar',
        icon: 'price_check',
        foreignToMaterial: false,
      },
      {
        title: 'Ventas',
        url: '/ventas',
        icon: 'confirmation_number',
        foreignToMaterial: false,
      },
      {
        title: 'Comprar',
        url: '/compras/comprar',
        icon: 'shopping_bag',
        foreignToMaterial: false,
      },
      {
        title: 'Compras',
        url: '/compras',
        icon: 'receipt_long',
        foreignToMaterial: false,
      },
      {
        title: 'Usuarios',
        url: '/usuarios',
        icon: 'person',
        foreignToMaterial: false,
      },
    ];
  }

  getItems(): Menu[] {
    return [...this.menu];
  }

  getDataPath(currentPath: string): Menu {
    const menu = this.menu.find((el: Menu) => el.url === currentPath);
    return menu as Menu;
  }
}
