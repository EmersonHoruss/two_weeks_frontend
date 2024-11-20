import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { Observable } from 'rxjs';
import { Auth } from '../domain/auth';
import { HttpClient } from '@angular/common/http';
import { ITokens } from '../domain/token.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  private apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  login(auth: Auth): Observable<ITokens> {
    const url = `${this.apiUrl}/authenticate`;
    return this.http.post<ITokens>(url, {
      ...auth,
    });
  }
  getNewAccessToken(refreshToken: string): Observable<ITokens> {
    throw new Error('Method not implemented.');
  }
}
