import { Profile } from '../profile/profile';

export enum Role {
  Admin = 'ROLE_ADMIN',
  Visitor = 'ROLE_VISITOR',
  Seller = 'ROLE_SELLER',
  Cashier = 'ROLE_CASHIER',
}

export enum UserStatus {
  Active = 'activo',
  Out = 'retirado',
  OnVacation = 'de vacaciones',
}

export interface UserRequired {
  email: string;
  password: string;
}

export interface UserOptional {
  id: number;
  roles: Array<string>;
  userStatus: UserStatus;
  profile: Profile;
  activated: boolean;
}

export type UserProperties = Required<UserRequired> & Partial<UserOptional>;

export type UserUpdate = Partial<{
  password: string;
  roles: Array<string>;
  userStatus: UserStatus;
  activated: boolean;
}>;

export class User {
  private readonly id: number;
  private profile: Profile;
  private activated: boolean;
  private email: string;
  private password: string;
  private roles: Array<string>;
  private userStatus: UserStatus;

  constructor(properties: UserProperties) {
    Object.assign(this, properties);

    this.activated = true;
    this.userStatus = UserStatus.Active;
    this.roles = [Role.Visitor];
  }

  properties(): UserProperties {
    return {
      id: this.id,
      profile: this.profile,
      activated: this.activated,
      email: this.email,
      password: this.password,
      roles: this.roles,
      userStatus: this.userStatus,
    };
  }

  update(fields: UserUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
