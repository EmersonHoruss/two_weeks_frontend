import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Sistema } from '../../domain/sistema/sistema';
import {
  SistemaCreateDto,
  SistemaShowDto,
  SistemaUpdateDto,
} from './sistema.dto';

@Injectable()
export class SistemaMapper
  implements
    IMapper<Sistema, SistemaCreateDto, SistemaUpdateDto, SistemaShowDto>
{
  toEntity(showDto: SistemaShowDto): Sistema {
    const {
      id,
      empresaNombre,
      empresaRuc,
      empresaDuenio,
      duenioCelular,
      abre,
      cierra,
      edicionManualProducto,
    } = showDto;

    return new Sistema({
      id,
      empresaNombre,
      empresaRuc,
      empresaDuenio,
      duenioCelular,
      abre,
      cierra,
      edicionManualProducto,
    });
  }

  toCreateDto(entity: Sistema): SistemaCreateDto {
    throw new Error('No existe soporte para la creación de un sistema');
  }

  toUpdateDto(entity: Sistema): SistemaUpdateDto {
    const {
      id,
      empresaNombre,
      empresaRuc,
      empresaDuenio,
      duenioCelular,
      abre,
      cierra,
    } = entity.properties();

    return {
      id,
      empresaNombre,
      empresaRuc,
      empresaDuenio,
      duenioCelular,
      abre,
      cierra,
    };
  }
}
