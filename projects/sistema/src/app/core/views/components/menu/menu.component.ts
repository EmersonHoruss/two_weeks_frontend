import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { Menu, MenuService } from '../../../../shared/services/menu.service';
interface MenuNode {
  label: string;
  icon: string;
  children?: MenuNode[];
}

interface FlatMenuNode {
  label: string;
  icon: string;
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
  {
    label: 'Dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Gestión',
    icon: 'settings',
    children: [
      {
        label: 'Usuarios',
        icon: 'person',
        children: [
          { label: 'Crear usuario', icon: 'person_add' },
          { label: 'Listar usuarios', icon: 'list' },
        ],
      },
      {
        label: 'Roles',
        icon: 'admin_panel_settings',
        children: [
          { label: 'Crear rol', icon: 'add' },
          { label: 'Listar roles', icon: 'list' },
        ],
      },
    ],
  },
  {
    label: 'Reportes',
    icon: 'bar_chart',
  },
];
