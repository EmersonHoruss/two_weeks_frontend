import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Type } from '../../domain/type/type';
import { TypeCreateDto, TypeShowDto, TypeUpdateDto } from './type.dto';
import { TypeRepository } from '../../domain/type/type.repository';
import { TypeInfrastructure } from '../../infrastructure/type/type.infrastructure';
import { TypeMapper } from './type.mapper';

@Injectable()
export class TypeApplication extends BaseApplication<
  Type,
  TypeCreateDto,
  TypeUpdateDto,
  TypeShowDto,
  TypeRepository
> {
  constructor(
    @Inject(TypeInfrastructure) 
    private readonly typeRepository: TypeRepository,
    private readonly typeMapper: TypeMapper
  ) {
    super(typeRepository, typeMapper);
  }
}
