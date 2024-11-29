import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { User } from '../../domain/user/user';
import { UserRepository } from '../../domain/user/user.repository';
import { UserInfrastructure } from '../../infrastructure/user/user.infrastructure';
import { UserCreateDto, UserShowDto, UserUpdateDto } from './user.dto';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserApplication extends BaseApplication<
  User,
  UserCreateDto,
  UserUpdateDto,
  UserShowDto,
  UserRepository
> {
  constructor(
    @Inject(UserInfrastructure) private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper
  ) {
    super(userRepository, userMapper);
  }
}
