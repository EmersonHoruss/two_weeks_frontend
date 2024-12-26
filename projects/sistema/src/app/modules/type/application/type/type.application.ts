import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Type } from '../../domain/type/type';
import { TypeCreateDto, TypeShowDto, TypeUpdateDto } from './type.dto';
import { TypeRepository } from '../../domain/type/type.repository';
import { TypeInfrastructure } from '../../infrastructure/type/type.infrastructure';
import { TypeMapper } from './type.mapper';
import { catchError, map, Observable, of } from 'rxjs';
import { RequestDto } from '../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../shared/domain/response';

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

  validateName(
    name: string,
    ignore: string = ''
  ): Observable<
    | null
    | { existNameOnActivated: boolean }
    | { existNameOnDeactivated: boolean }
  > {
    const requestDto: RequestDto = {
      page: { page: 0, size: 1 },
      query: `name<eq>${name}`,
    };
    return this.list(requestDto).pipe(
      map((response: Response<Type>) => {
        const types = response.content as Array<Type>;
        if (!types.length) return null;

        const { name, activated } = types[0].properties();

        if (name.toLocaleLowerCase() === ignore.toLocaleLowerCase())
          return null;

        if (activated) return { existNameOnActivated: true };
        return { existNameOnDeactivated: true };
      }),
      catchError(() => of(null))
    );
  }
}
