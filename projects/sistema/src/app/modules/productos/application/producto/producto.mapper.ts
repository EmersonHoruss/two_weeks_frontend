import { Injectable } from '@angular/core';
import { IMapper } from '../../../../shared/application/mapper/mapper.interface';
import { Producto } from '../../domain/producto/producto';
import {
  ProductoCreateDto,
  ProductoShowDto,
  ProductoUpdateDto,
} from './producto.dto';

@Injectable()
export class ProductoMapper
  implements
    IMapper<Producto, ProductoCreateDto, ProductoUpdateDto, ProductoShowDto>
{
  toEntity(showDto: ProductoShowDto): Producto {
    const {
      id,
      nombre,
      nombreUnico,
      precioCompra,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      stock,
      codigo,
      activated,
    } = showDto;

    return new Producto({
      id,
      nombre,
      nombreUnico,
      precioCompra,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      stock,
      codigo,
      activated,
      distribuidorId: null,
    });
  }

  toCreateDto(entity: Producto): ProductoCreateDto {
    const {
      nombre,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      codigo,
      distribuidorId,
    } = entity.properties();

    return {
      nombre,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      codigo,
      distribuidorId,
    };
  }

  toUpdateDto(entity: Producto): ProductoUpdateDto {
    const {
      id,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      distribuidorId,
    } = entity.properties();

    return {
      id,
      precioVentaMenor,
      precioVentaMayor,
      precioVentaSuperMayor,
      distribuidorId,
    };
  }
}
