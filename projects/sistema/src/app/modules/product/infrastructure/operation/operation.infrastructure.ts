import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../../../shared/infrastructure/base.infrastructure';
import { Operation } from '../../domain/operation/operation';
import { OperationRepository } from '../../domain/operation/operation.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OperationInfrastructure
  extends BaseInfrastructure<Operation>
  implements OperationRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/operations');
  }

  override update(entity: Operation): never {
    throw new Error(
      'El método "actualizar" no está soportado por la entidad Operación.'
    );
  }

  override delete(id: number): never {
    throw new Error(
      'El método "eliminar" no está soportado por la entidad operación.'
    );
  }
}
