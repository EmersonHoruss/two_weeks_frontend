import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Operation, OperationType } from '../../domain/operation/operation';
import { OperationRepository } from '../../domain/operation/operation.repository';
import { OperationInfrastructure } from '../../infrastructure/operation/operation.infrastructure';
import { Observable } from 'rxjs';

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

  override insert(operation: Operation): Observable<any> {
    const operationProperties = operation.properties();
    const { type, amount, product } = operationProperties;
    const { stock } = product.properties();

    if (type === OperationType.Subtract && amount > stock) {
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
