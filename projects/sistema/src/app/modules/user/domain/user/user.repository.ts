import { BaseRepository } from '../../../../shared/domain/base.repository';
import { User } from './user';

export interface UserRepository extends BaseRepository<User> {}
