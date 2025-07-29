import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Size } from '../../domain/size/size';
import { SizeCreateDto, SizeShowDto, SizeUpdateDto } from './size.dto';

@Injectable()
export class SizeMapper
  implements IMapper<Size, SizeCreateDto, SizeUpdateDto, SizeShowDto>
{
  toEntity(showDto: SizeShowDto): Size {
    const { id, name, code, activated } = showDto;

    return new Size({ id, name, code, activated });
  }

  toCreateDto(entity: Size): SizeCreateDto {
    const { name } = entity.properties();

    return { name };
  }

  toUpdateDto(entity: Size): SizeUpdateDto {
    const { id, name } = entity.properties();

    return { id, name };
  }
}
