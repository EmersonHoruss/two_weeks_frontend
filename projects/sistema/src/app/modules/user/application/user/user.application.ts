import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { User } from '../../domain/user/user';
import { UserRepository } from '../../domain/user/user.repository';
import { UserInfrastructure } from '../../infrastructure/user/user.infrastructure';

@Injectable()
export class UserApplication extends BaseApplication<User, UserRepository> {
  constructor(
    @Inject(UserInfrastructure) private readonly userRepository: UserRepository
  ) {
    super(userRepository);
  }
}
