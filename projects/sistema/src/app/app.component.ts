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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'tw-root',
  imports: [
    RouterOutlet,
    CommonModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isOpened = true;
  isMobile = false;
  layout!: ILayout;

  constructor(
    private readonly iconService: IconService,
    private readonly layoutService: LayoutService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.layoutService.getConfiguration().subscribe((layout: ILayout) => {
      this.layout = layout;
    });

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map((result) => result.matches))
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }

  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }
}
