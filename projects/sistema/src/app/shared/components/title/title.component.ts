import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tw-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class TitleComponent {
  menuItem!: Menu;

  @Input() hardDeletionEnabled: boolean = false;
  @Input() isMasculine: boolean = true;

  hasRouteDeletion: boolean = false;
  private readonly ELIMINADOS = '/eliminados';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService,
    private readonly router: Router
  ) {
    const fullPathStr = this.router.url;
    this.hasRouteDeletion = fullPathStr.includes(this.ELIMINADOS);
    let currentPath = '';

    if (this.inDeletionPage) {
      currentPath = `/${fullPathStr.split('/')[1]}`;
    } else {
      currentPath = `/${this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path}`;
    }
    this.menuItem = menuService.getDataPath(currentPath);
  }

  switchPages() {
    if (!this.hardDeletionEnabled) return;

    let url = this.menuItem.url;
    if (!this.inDeletionPage) {
      url += this.ELIMINADOS;
    }

    this.router.navigate([url]);
  }

  get inDeletionPage() {
    return this.hardDeletionEnabled && this.hasRouteDeletion;
  }

  get title() {
    if (this.inDeletionPage) {
      const deleted = this.isMasculine ? 'Eliminados' : 'Eliminadas';
      return `${this.menuItem.title} ${deleted}`;
    }

    return this.menuItem.title;
  }
}
