import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Size } from '../../domain/size/size';
import { SizeCreateDto, SizeShowDto, SizeUpdateDto } from './size.dto';
import { SizeRepository } from '../../domain/size/size.repository';
import { SizeInfrastructure } from '../../infrastructure/size/size.infrastructure';
import { SizeMapper } from './size.mapper';

@Injectable()
export class SizeApplication extends BaseApplication<
  Size,
  SizeCreateDto,
  SizeUpdateDto,
  SizeShowDto,
  SizeRepository
> {
  constructor(
    @Inject(SizeInfrastructure) 
    private readonly sizeRepository: SizeRepository,
    private readonly sizeMapper: SizeMapper
  ) {
    super(sizeRepository, sizeMapper);
  }
}
