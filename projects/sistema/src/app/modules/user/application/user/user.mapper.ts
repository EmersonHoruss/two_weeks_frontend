import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Profile } from '../../domain/profile/profile';
import { User } from '../../domain/user/user';
import { ProfileMapper } from '../profile/profile.mapper';
import { UserCreateDto, UserShowDto, UserUpdateDto } from './user.dto';

export class UserMapper
  implements IMapper<User, UserCreateDto, UserUpdateDto, UserShowDto>
{
  toEntity(showDto: UserShowDto): User {
    let { id, email, roles, userStatus, activated, profile } = showDto;
    const profileEntity: Profile = new ProfileMapper().toEntity(profile);

    return new User({
      id,
      email,
      password: 'codificado',
      roles,
      userStatus,
      activated,
      profile: profileEntity,
    });
  }

  toCreateDto(entity: User): UserCreateDto {
    const { email, password, roles, userStatus } = entity.properties();

    return { email, password, roles, userStatus };
  }

  toUpdateDto(entity: User): UserUpdateDto {
    const { id, email, password, roles, userStatus } = entity.properties();

    return { id, email, password, roles, userStatus };
  }
}
