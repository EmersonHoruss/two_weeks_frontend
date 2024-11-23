import { Profile, ProfileProperties } from './profile';

export class ProfileFactory {
  create({
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
    userId,
  }) {
    const ProfileProperties: ProfileProperties = {
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
      userId,
    };

    return new Profile(ProfileProperties);
  }
}
