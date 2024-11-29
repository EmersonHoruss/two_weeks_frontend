import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { ProfileRepository } from '../../domain/profile/profile.repository';
import { ProfileInfrastructure } from '../../infrastructure/profile/profile.infrastructure';
import { Profile } from '../../domain/profile/profile';
import {
  ProfileCreateDto,
  ProfileShowDto,
  ProfileUpdateDto,
} from './profile.dto';
import { ProfileMapper } from './profile.mapper';

@Injectable()
export class ProfileApplication extends BaseApplication<
  Profile,
  ProfileCreateDto,
  ProfileUpdateDto,
  ProfileShowDto,
  ProfileRepository
> {
  constructor(
    @Inject(ProfileInfrastructure)
    private readonly profileRepository: ProfileRepository,
    private readonly profileMapper: ProfileMapper
  ) {
    super(profileRepository, profileMapper);
  }
}
