import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { UserRepository } from '../../domain/user/user.repository';
import { HttpClient } from '@angular/common/http';
import {
  UserCreateDto,
  UserShowDto,
  UserUpdateDto,
} from '../../application/user/user.dto';

@Injectable()
export class UserInfrastructure
  extends BaseInfrastructure<UserCreateDto, UserUpdateDto, UserShowDto>
  implements UserRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/users');
  }
}
