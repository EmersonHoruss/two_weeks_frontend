import { UserStatus } from '../../domain/user/user';
import { ProfileShowDto } from '../profile/profile.dto';

export interface UserCreateDto {
  email: string;
  password: string;
  roles?: Array<string>;
  userStatus?: UserStatus;
}

export interface UserUpdateDto {
  id: number;
  email?: string;
  password?: string;
  roles?: Array<string>;
  userStatus?: UserStatus;
}

export interface UserShowDto {
  id: number;
  email: string;
  roles: Array<string>;
  userStatus: UserStatus;
  activated: boolean;
  profile?: ProfileShowDto;
}
