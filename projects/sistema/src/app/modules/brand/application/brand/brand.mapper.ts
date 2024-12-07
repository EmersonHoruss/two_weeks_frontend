import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Brand } from '../../domain/brand/brand';
import { BrandCreateDto, BrandShowDto, BrandUpdateDto } from './brand.dto';

@Injectable()
export class BrandMapper
  implements IMapper<Brand, BrandCreateDto, BrandUpdateDto, BrandShowDto>
{
  toEntity(showDto: BrandShowDto): Brand {
    const { id, name, activated } = showDto;

    return new Brand({ id, name, activated });
  }

  toCreateDto(entity: Brand): BrandCreateDto {
    const { name } = entity.properties();
    
    return { name };
  }

  toUpdateDto(entity: Brand): BrandUpdateDto {
    const { id, name } = entity.properties();
    
    return { id, name };
  }
}
