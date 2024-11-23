import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Profile } from '../../domain/profile/profile';
import { ProfileRepository } from '../../domain/profile/profile.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileInfrastructure
  extends BaseInfrastructure<Profile>
  implements ProfileRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/profiles');
  }
}
