import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { User } from '../../domain/user/user';
import { UserRepository } from '../../domain/user/user.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserInfrastructure
  extends BaseInfrastructure<User>
  implements UserRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/users');
  }
}
