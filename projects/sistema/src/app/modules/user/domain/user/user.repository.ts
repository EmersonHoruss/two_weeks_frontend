import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  UserCreateDto,
  UserShowDto,
  UserUpdateDto,
} from '../../application/user/user.dto';

export interface UserRepository
  extends BaseRepository<UserCreateDto, UserUpdateDto, UserShowDto> {}
