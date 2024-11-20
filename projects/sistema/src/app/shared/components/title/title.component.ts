import { Component } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'amb-title',
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss',
    standalone: false
})
export class TitleComponent {
  itemMenu!: Menu;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService
  ) {
    const currentPath = `/${this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path}`;
    this.itemMenu = menuService.getDataPath(currentPath);
  }
}
