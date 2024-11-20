export interface AuthRequired {
  email: string;
  password: string;
}

export interface AuthOptional {
  recaptchaReactive: string;
}

export type AuthProperties = Required<AuthRequired> & Partial<AuthOptional>;

export class Auth {
  private readonly email: string;
  private password: string;
  private recaptchaReactive: string;

  constructor(properties: AuthProperties) {
    Object.assign(this, properties);
  }

  properties(): AuthProperties {
    return {
      email: this.email,
      password: this.password,
      recaptchaReactive: this.recaptchaReactive,
    };
  }
}
