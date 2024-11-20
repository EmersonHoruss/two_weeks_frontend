import { Inject, Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { Auth } from '../domain/auth';
import { Observable } from 'rxjs';
import { StorageApplication } from './storage.application';
import { Router } from '@angular/router';
import { ITokens } from '../domain/token.interface';

@Injectable()
export class AuthApplication {
  private userLogged = false;

  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    private readonly storageApplication: StorageApplication,
    private readonly router: Router
  ) {}

  login(auth: Auth) {
    return this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: console.warn,
    });
  }

  private userAuthenticated(response: ITokens) {
    console.log(response);
    this.storageApplication.setField('accessToken', response.accessToken);
    this.userLogged = true;
    this.router.navigate(['user']);
  }

  get isUserLogged(): boolean {
    const accessToken = !!this.storageApplication.getField('accessToken');

    return this.userLogged || accessToken;
  }

  logout() {
    this.userLogged = false;
    this.storageApplication.clear();
    this.router.navigate(['/']);
  }
}
