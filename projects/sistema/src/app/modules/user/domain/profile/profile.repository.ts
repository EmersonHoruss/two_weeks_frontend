import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  ProfileCreateDto,
  ProfileShowDto,
  ProfileUpdateDto,
} from '../../application/profile/profile.dto';

export interface ProfileRepository
  extends BaseRepository<ProfileCreateDto, ProfileUpdateDto, ProfileShowDto> {}
