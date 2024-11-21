import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Operation, OperationType } from '../../domain/operation/operation';
import { OperationRepository } from '../../domain/operation/operation.repository';
import { OperationInfrastructure } from '../../infrastructure/operation/operation.infrastructure';

@Injectable()
export class OperationApplication extends BaseApplication<
  Operation,
  OperationRepository
> {
  constructor(
    @Inject(OperationInfrastructure)
    private readonly operationRepository: OperationRepository
  ) {
    super(operationRepository);
  }

  override insert(operation: Operation, product_stock?: number) {
    const operationProperties = operation.properties();
    if (
      operationProperties.type === OperationType.Subtract &&
      operationProperties.amount > product_stock
    ) {
      throw new Error(
        'Creación de operación fallida: no se puede quitar una cantidad menor a la que hay en stock.'
      );
    }
    return this.operationRepository.insert(operation);
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
