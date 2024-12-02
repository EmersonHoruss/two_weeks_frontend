import { Component, ViewEncapsulation } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent {
  menuItem!: Menu;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService
  ) {
    const currentPath = `/${this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path}`;
    this.menuItem = menuService.getDataPath(currentPath);
  }
}
