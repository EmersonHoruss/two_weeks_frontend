import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Caja } from '../../domain/caja/caja';
import { CajaCreateDto, CajaShowDto, CajaUpdateDto } from './caja.dto';

@Injectable()
export class CajaMapper
  implements IMapper<Caja, CajaCreateDto, CajaUpdateDto, CajaShowDto>
{
  toEntity(showDto: CajaShowDto): Caja {
    const {
      id,
      fecha,
      montoInicial,
      montoFinalFisico,
      montoFinalDigital,
      ganancia,
    } = showDto;

    return new Caja({
      id,
      fecha,
      montoInicial,
      montoFinalFisico,
      montoFinalDigital,
      ganancia,
    });
  }

  toCreateDto(entity: Caja): CajaCreateDto {
    const { fecha, montoInicial } = entity.properties();

    return { fecha, montoInicial };
  }

  toUpdateDto(entity: Caja): CajaUpdateDto {
    const { id, fecha, montoInicial } = entity.properties();

    return { id, fecha, montoInicial };
  }
}
