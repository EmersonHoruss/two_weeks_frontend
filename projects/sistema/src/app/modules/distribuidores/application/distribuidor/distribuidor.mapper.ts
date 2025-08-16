import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Distribuidor } from '../../domain/distribuidor/distribuidor';
import {
  DistribuidorCreateDto,
  DistribuidorShowDto,
  DistribuidorUpdateDto,
} from './distribuidor.dto';

@Injectable()
export class DistribuidorMapper
  implements
    IMapper<
      Distribuidor,
      DistribuidorCreateDto,
      DistribuidorUpdateDto,
      DistribuidorShowDto
    >
{
  toEntity(showDto: DistribuidorShowDto): Distribuidor {
    const {
      id,
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaRuc,
      empresaCelular,
      empresaGiro,
      activated,
    } = showDto;

    return new Distribuidor({
      id,
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaCelular,
      empresaRuc,
      empresaGiro,
      activated,
    });
  }

  toCreateDto(entity: Distribuidor): DistribuidorCreateDto {
    const {
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaRuc,
      empresaCelular,
      empresaGiro,
    } = entity.properties();

    return {
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaRuc,
      empresaCelular,
      empresaGiro,
    };
  }

  toUpdateDto(entity: Distribuidor): DistribuidorUpdateDto {
    const {
      id,
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaRuc,
      empresaCelular,
      empresaGiro,
    } = entity.properties();

    return {
      id,
      duenio,
      duenioCelular,
      duenioWhatsapp,
      empresaNombre,
      empresaRuc,
      empresaCelular,
      empresaGiro,
    };
  }
}
