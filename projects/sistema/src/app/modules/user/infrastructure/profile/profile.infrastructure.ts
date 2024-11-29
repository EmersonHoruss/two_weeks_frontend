import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { ProfileRepository } from '../../domain/profile/profile.repository';
import { HttpClient } from '@angular/common/http';
import {
  ProfileCreateDto,
  ProfileShowDto,
  ProfileUpdateDto,
} from '../../application/profile/profile.dto';

@Injectable()
export class ProfileInfrastructure
  extends BaseInfrastructure<ProfileCreateDto, ProfileUpdateDto, ProfileShowDto>
  implements ProfileRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/profiles');
  }
}
