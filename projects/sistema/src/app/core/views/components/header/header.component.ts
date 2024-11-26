import { Component, EventEmitter, Output } from '@angular/core';
import { AuthApplication } from '../../../application/auth.application';

@Component({
  selector: 'tw-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent {
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter();
  userName = 'David Perales';

  constructor(private readonly auth: AuthApplication) {}

  toggleMenu() {
    this.onToggleMenu.emit();
  }

  logout() {
    this.auth.logout();
  }
}
