import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Profile } from '../../domain/profile/profile';
import {
  ProfileCreateDto,
  ProfileShowDto,
  ProfileUpdateDto,
} from './profile.dto';

export class ProfileMapper
  implements
    IMapper<Profile, ProfileCreateDto, ProfileUpdateDto, ProfileShowDto>
{
  toEntity(showDto: ProfileShowDto): Profile {
    const {
      id,
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
    } = showDto;

    return new Profile({
      id,
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
    });
  }

  toCreateDto(entity: Profile): ProfileCreateDto {
    const {
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
      userId,
    } = entity.properties();

    return {
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
      userId,
    };
  }

  toUpdateDto(entity: Profile): ProfileUpdateDto {
    const {
      id,
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
    } = entity.properties();

    return {
      id,
      name,
      secondName,
      surname,
      secondSurname,
      dni,
      phone,
      familiarPhone,
      whatsapp,
      address,
      photo,
    };
  }
}
