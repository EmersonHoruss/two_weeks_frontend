import { Component } from '@angular/core';
import { Menu, MenuService } from '../../../../shared/services/menu.service';

@Component({
    selector: 'amb-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    standalone: false
})
export class MenuComponent {
  menu: Menu[];

  constructor(private readonly menuService: MenuService) {
    this.menu = menuService.getItems();
  }
}
