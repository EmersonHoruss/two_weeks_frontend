import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import {
  Operation,
  OperationType,
  OperationUpdate,
} from '../../domain/operation/operation';
import { OperationRepository } from '../../domain/operation/operation.repository';
import { OperationInfrastructure } from '../../infrastructure/operation/operation.infrastructure';
import { Observable } from 'rxjs';
import {
  OperationCreateDto,
  OperationShowDto,
  OperationUpdateDto,
} from './operation.dto';
import { OperationMapper } from './operation.mapper';

@Injectable()
export class OperationApplication extends BaseApplication<
  Operation,
  OperationUpdate,
  OperationCreateDto,
  OperationUpdateDto,
  OperationShowDto,
  OperationRepository
> {
  constructor(
    @Inject(OperationInfrastructure)
    private readonly operationRepository: OperationRepository,
    private readonly operationMapper: OperationMapper
  ) {
    super(operationRepository, operationMapper);
  }

  override create(operation: Operation): Observable<any> {
    const operationProperties = operation.properties();
    const { type, amount, product } = operationProperties;
    const { stock } = product.properties();

    if (type === OperationType.Subtract && amount > stock) {
      throw new Error(
        'Creación de operación fallida: no se puede quitar una cantidad menor a la que hay en stock.'
      );
    }
    const operationDto = this.operationMapper.toCreateDto(operation);
    return this.operationRepository.create(operationDto);
  }

  override update(entity: OperationUpdate): never {
    throw new Error(
      'El método "actualizar" no está soportado por la entidad Operación.'
    );
  }

  override setActivation(id: number, activation: boolean): never {
    throw new Error(
      'El método "eliminar lógicamente" no está soportado por la entidad operación.'
    );
  }
}
