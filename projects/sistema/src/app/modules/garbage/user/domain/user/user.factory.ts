import { User, UserProperties } from './user';

export class UserFactory {
  create({ id, profile, activated, email, password, roles, userStatus }) {
    const userProperties: UserProperties = {
      id,
      profile,
      activated,
      email,
      password,
      roles,
      userStatus,
    };

    if (email === null || email === undefined)
      throw new Error('Falta el email al usuario');
    if (password === null || password === undefined)
      throw new Error('Falta la contraseña al usuario');

    return new User(userProperties);
  }
}
