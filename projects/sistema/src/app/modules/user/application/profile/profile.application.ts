import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { ProfileRepository } from '../../domain/profile/profile.repository';
import { ProfileInfrastructure } from '../../infrastructure/profile/profile.infrastructure';
import { Profile } from '../../domain/profile/profile';

@Injectable()
export class ProfileApplication extends BaseApplication<
  Profile,
  ProfileRepository
> {
  constructor(
    @Inject(ProfileInfrastructure)
    private readonly profileRepository: ProfileRepository
  ) {
    super(profileRepository);
  }
}
