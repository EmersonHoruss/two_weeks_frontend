import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconService } from './shared/services/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from './config/injections/layout/services/layout.service';
import { ILayout } from './config/injections/layout/interfaces/layout.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tw-root',
  imports: [
    RouterOutlet,
    CommonModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isOpened = true;
  layout!: ILayout;

  constructor(
    private readonly iconService: IconService,
    private readonly layoutService: LayoutService
  ) {
    this.layoutService.getConfiguration().subscribe((layout: ILayout) => {
      this.layout = layout;
    });
  }
}
