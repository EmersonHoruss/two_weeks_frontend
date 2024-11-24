import { Profile } from '../profile/profile';

export enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_VISITOR = 'ROLE_VISITOR',
  ROLE_SELLER = 'ROLE_SELLER',
  ROLE_CASHIER = 'ROLE_CASHIER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  OUT = 'OUT',
  ON_VACATION = 'ON_VACATION',
}

export interface UserRequired {
  email: string;
  password: string;
  roles: Array<string>;
  userStatus: UserStatus;
}

export interface UserOptional {
  id: number;
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
    this.userStatus = UserStatus.ACTIVE;
    this.roles = [Role.ROLE_VISITOR];
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
