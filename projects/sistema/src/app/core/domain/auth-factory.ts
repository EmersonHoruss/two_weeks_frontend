import { Auth, AuthProperties } from './auth';

export class AuthFactory {
  static create(email: string, password: string): Auth {
    const recaptchaReactive: string = 'abc';
    const authProperties: AuthProperties = {
      email,
      password,
      recaptchaReactive,
    };

    if (email.trim() === '') throw new Error('email should not be empty');
    if (password.trim() === '') throw new Error('password should not be empty');

    return new Auth(authProperties);
  }
}
