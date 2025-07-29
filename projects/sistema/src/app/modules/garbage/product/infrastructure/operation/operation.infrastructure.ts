import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Operation } from '../../domain/operation/operation';
import { OperationRepository } from '../../domain/operation/operation.repository';
import { HttpClient } from '@angular/common/http';
import {
  OperationCreateDto,
  OperationShowDto,
} from '../../application/operation/operation.dto';

@Injectable()
export class OperationInfrastructure
  extends BaseInfrastructure<
    OperationCreateDto,
    OperationCreateDto,
    OperationShowDto
  >
  implements OperationRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/operations');
  }

  override update(entity: OperationCreateDto): never {
    throw new Error(
      'El método "actualizar" no está permitido por la entidad Operación.'
    );
  }

  override setActivation(id: number, activation: boolean): never {
    throw new Error(
      'El método "eliminar lógicamente" no está permitido por la entidad Operación.'
    );
  }
}
