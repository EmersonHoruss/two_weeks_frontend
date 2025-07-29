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
        title: 'Ver Caja',
        url: '/caja/ver',
        icon: 'visibility',
        foreignToMaterial: false,
      },
      {
        title: 'Abrir Caja',
        url: '/caja/abrir',
        icon: 'lock_open',
        foreignToMaterial: false,
      },
      {
        title: 'Cerrar Caja',
        url: '/caja/cerrar',
        icon: 'lock',
        foreignToMaterial: false,
      },

      {
        title: 'Ver Distribuidores',
        url: '/distribuidores/ver',
        icon: 'groups',
        foreignToMaterial: false,
      },
      {
        title: 'Crear Distribuidor',
        url: '/distribuidores/crear',
        icon: 'person_add',
        foreignToMaterial: false,
      },
      {
        title: 'Actualizar Distribuidor',
        url: '/distribuidores/actualizar',
        icon: 'edit',
        foreignToMaterial: false,
      },

      {
        title: 'Comprar',
        url: '/compras/crear',
        icon: 'shopping_cart',
        foreignToMaterial: false,
      },
      {
        title: 'Ver Compras',
        url: '/compras/ver',
        icon: 'receipt_long',
        foreignToMaterial: false,
      },
      {
        title: 'Actualizar Compra',
        url: '/compras/actualizar',
        icon: 'sync',
        foreignToMaterial: false,
      },

      {
        title: 'Crear Usuario',
        url: '/usuarios/crear',
        icon: 'person_add',
        foreignToMaterial: false,
      },
      {
        title: 'Actualizar Usuario',
        url: '/usuarios/actualizar',
        icon: 'edit',
        foreignToMaterial: false,
      },
      {
        title: 'Ver Usuarios',
        url: '/usuarios/ver',
        icon: 'group',
        foreignToMaterial: false,
      },

      {
        title: 'Vender',
        url: '/ventas/crear',
        icon: 'point_of_sale',
        foreignToMaterial: false,
      },
      {
        title: 'Ver Ventas',
        url: '/ventas/ver',
        icon: 'list_alt',
        foreignToMaterial: false,
      },
      {
        title: 'Actualizar Venta',
        url: '/ventas/actualizar',
        icon: 'autorenew',
        foreignToMaterial: false,
      },

      {
        title: 'Sistema',
        url: '/sistema',
        icon: 'settings',
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
