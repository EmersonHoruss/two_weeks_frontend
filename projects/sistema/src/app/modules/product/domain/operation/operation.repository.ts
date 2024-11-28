import { BaseRepository } from '../../../../shared/domain/base.repository';
import {
  OperationCreateDto,
  OperationShowDto,
  OperationUpdateDto,
} from '../../application/operation/operation.dto';

export interface OperationRepository
  extends BaseRepository<
    OperationCreateDto,
    OperationUpdateDto,
    OperationShowDto
  > {}
