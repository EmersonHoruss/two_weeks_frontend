import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Menu, MenuService } from '../../../../shared/services/menu.service';
interface MenuNode {
  label: string;
  icon: string;
  route?: string;
  children?: MenuNode[];
}

interface FlatMenuNode {
  label: string;
  icon: string;
  route?: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'tw-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: false,
})
export class MenuComponent {
  private transformer = (node: MenuNode, level: number): FlatMenuNode => ({
    label: node.label,
    icon: node.icon,
    route: node.route,
    level,
    expandable: !!node.children?.length,
  });

  treeControl = new FlatTreeControl<FlatMenuNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatMenuNode) => node.expandable;
}

const TREE_DATA: MenuNode[] = [
  { label: 'Inicio', icon: 'home', route: '/inicio' },
  {
    label: 'Sistema',
    icon: 'settings',
    route: '/sistema',
  },
  {
    label: 'Caja',
    icon: 'account_balance_wallet',
    children: [
      { label: 'Abrir/Cerrar', icon: 'lock_open', route: '/caja/abrir' },
      { label: 'Historial', icon: 'history', route: '/caja/listar' },
    ],
  },
  {
    label: 'Compras',
    icon: 'shopping_cart',
    children: [
      { label: 'Registrar', icon: 'note_add', route: '/compras/registrar' },
      { label: 'Lista', icon: 'list', route: '/compras/listar' },
    ],
  },
  {
    label: 'Ventas',
    icon: 'point_of_sale',
    children: [
      { label: 'Registrar', icon: 'note_add', route: '/ventas/registrar' },
      { label: 'Lista', icon: 'list', route: '/ventas/listar' },
    ],
  },
  {
    label: 'Usuarios',
    icon: 'group',
    children: [
      { label: 'Registrar', icon: 'person_add', route: '/usuarios/registrar' },
      { label: 'Lista', icon: 'list', route: '/usuarios/listar' },
    ],
  },
  {
    label: 'Distribuidores',
    icon: 'local_shipping',
    children: [
      {
        label: 'Registrar',
        icon: 'note_add',
        route: '/distribuidores/registrar',
      },
      { label: 'Lista', icon: 'list', route: '/distribuidores/listar' },
    ],
  },
  {
    label: 'Productos',
    icon: 'inventory',
    children: [
      { label: 'Registrar', icon: 'note_add', route: '/productos/registrar' },
      { label: 'Lista', icon: 'list', route: '/productos/listar' },
    ],
  },
  { label: 'Reportes', icon: 'bar_chart', route: '/reportes' },
];
