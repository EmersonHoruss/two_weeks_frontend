import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Type } from '../../domain/type/type';
import { TypeCreateDto, TypeShowDto, TypeUpdateDto } from './type.dto';

@Injectable()
export class TypeMapper
  implements IMapper<Type, TypeCreateDto, TypeUpdateDto, TypeShowDto>
{
  toEntity(showDto: TypeShowDto): Type {
    const { id, name, activated } = showDto;

    return new Type({ id, name, activated });
  }

  toCreateDto(entity: Type): TypeCreateDto {
    const { name } = entity.properties();
    
    return { name };
  }

  toUpdateDto(entity: Type): TypeUpdateDto {
    const { id, name } = entity.properties();
    
    return { id, name };
  }
}
