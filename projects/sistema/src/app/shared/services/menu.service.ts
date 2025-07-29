import { Injectable } from '@angular/core';

export interface MenuNode {
  label: string;
  icon: string;
  url?: string;
  title?: string;
  foreignToMaterial?: boolean;
  children?: MenuNode[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: MenuNode[];

  constructor() {
    this.menu = [
      {
        label: 'Inicio',
        icon: 'home',
        url: '/inicio',
        title: 'Bienvenido',
        foreignToMaterial: false,
      },
      {
        label: 'Sistema',
        icon: 'settings',
        url: '/sistema',
        title: 'Sistema',
        foreignToMaterial: false,
      },
      {
        label: 'Caja',
        icon: 'account_balance_wallet',
        children: [
          {
            label: 'Abrir/Cerrar',
            icon: 'lock_open',
            url: '/caja/abrir',
            title: 'Abrir/Cerrar Caja',
            foreignToMaterial: false,
          },
          {
            label: 'Historial',
            icon: 'history',
            url: '/caja/historia',
            title: 'Historia de Caja',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Compras',
        icon: 'shopping_cart',
        children: [
          {
            label: 'Registrar',
            icon: 'note_add',
            url: '/compras/registrar',
            title: 'Registrar Compra',
            foreignToMaterial: false,
          },
          {
            label: 'Lista',
            icon: 'list',
            url: '/compras/listar',
            title: 'Lista de Compras',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Ventas',
        icon: 'point_of_sale',
        children: [
          {
            label: 'Registrar',
            icon: 'note_add',
            url: '/ventas/registrar',
            title: 'Registrar Venta',
            foreignToMaterial: false,
          },
          {
            label: 'Lista',
            icon: 'list',
            url: '/ventas/listar',
            title: 'Lista de Ventas',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Usuarios',
        icon: 'group',
        children: [
          {
            label: 'Registrar',
            icon: 'person_add',
            url: '/usuarios/registrar',
            title: 'Registrar Usuario',
            foreignToMaterial: false,
          },
          {
            label: 'Lista',
            icon: 'list',
            url: '/usuarios/listar',
            title: 'Lista de Usuarios',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Distribuidores',
        icon: 'local_shipping',
        children: [
          {
            label: 'Registrar',
            icon: 'note_add',
            url: '/distribuidores/registrar',
            title: 'Registrar Distribuidor',
            foreignToMaterial: false,
          },
          {
            label: 'Lista',
            icon: 'list',
            url: '/distribuidores/listar',
            title: 'Lista de Distribuidores',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Productos',
        icon: 'inventory',
        children: [
          {
            label: 'Registrar',
            icon: 'note_add',
            url: '/productos/registrar',
            title: 'Registrar Producto',
            foreignToMaterial: false,
          },
          {
            label: 'Lista',
            icon: 'list',
            url: '/productos/listar',
            title: 'Lista de Productos',
            foreignToMaterial: false,
          },
        ],
      },
      {
        label: 'Reportes',
        icon: 'bar_chart',
        url: '/reportes',
        title: 'Reportes',
        foreignToMaterial: false,
      },
    ];
  }

  getMenu(): MenuNode[] {
    return this.menu;
  }

  getLeafNodes(): MenuNode[] {
    const result: MenuNode[] = [];

    const collectLeafNodes = (nodes: MenuNode[]) => {
      for (const node of nodes) {
        if (node.children && node.children.length > 0) {
          collectLeafNodes(node.children);
        } else {
          result.push(node);
        }
      }
    };

    collectLeafNodes(this.menu);

    return result;
  }

  getDataPath(currentPath: string): MenuNode {
    return this.getLeafNodes().find((el: MenuNode) => el.url === currentPath);
  }
}
