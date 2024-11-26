import { Component } from '@angular/core';
import { LayoutService } from '../../../../config/injections/layout/services/layout.service';

@Component({
  selector: 'tw-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
  standalone: false,
})
export class PageLoginComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setConfiguration({
      headerHidden: false,
      menuHidden: false,
    });
  }

  ngOnDestroy(): void {
    this.layoutService.setConfiguration({
      headerHidden: false,
      menuHidden: false,
    });
  }
}
