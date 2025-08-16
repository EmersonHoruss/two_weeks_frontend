import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tw-page-open',
  templateUrl: './page-open.component.html',
  styleUrl: './page-open.component.scss',
  standalone: false,
})
export class PageOpenComponent {
  constructor(private readonly router: Router) {}

  historical() {
    this.router.navigate(['/caja/historial']);
  }
}
