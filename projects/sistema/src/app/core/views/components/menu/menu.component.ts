import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import {
  MenuNode,
  MenuService,
} from '../../../../shared/services/menu.service';

interface FlatMenuNode {
  label: string;
  icon: string;
  url?: string;
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
    url: node.url,
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

  constructor(private readonly menuService: MenuService) {
    this.dataSource.data = this.menuService.getMenu();
  }

  hasChild = (_: number, node: FlatMenuNode) => node.expandable;
}
