import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../../config/injections/layout/services/layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApplication } from '../../../application/auth.application';
import { AuthFactory } from '../../../domain/auth-factory';
import { StorageApplication } from '../../../application/storage.application';

@Component({
    selector: 'amb-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false
})
export class LoginComponent {
  group: FormGroup;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly authApplication: AuthApplication
  ) {
    this.group = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (this.group.invalid) return;

    const values = this.group.value;
    const auth = AuthFactory.create(values.email, values.password);
    this.authApplication.login(auth);
  }

  ngOnDestroy(): void {
    this.layoutService.setConfiguration({
      headerHidden: false,
      menuHidden: false,
    });
  }
}
