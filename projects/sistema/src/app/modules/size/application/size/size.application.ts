import { Inject, Injectable } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Size } from '../../domain/size/size';
import { SizeCreateDto, SizeShowDto, SizeUpdateDto } from './size.dto';
import { SizeRepository } from '../../domain/size/size.repository';
import { SizeInfrastructure } from '../../infrastructure/size/size.infrastructure';
import { SizeMapper } from './size.mapper';
import { catchError, map, Observable, of } from 'rxjs';
import { RequestDto } from '../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../shared/domain/response';

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
      map((response: Response<Size>) => {
        const sizes = response.content as Array<Size>;
        if (!sizes.length) return null;

        const { name, activated } = sizes[0].properties();

        if (name.toLocaleLowerCase() === ignore.toLocaleLowerCase())
          return null;

        if (activated) return { existNameOnActivated: true };
        return { existNameOnDeactivated: true };
      }),
      catchError(() => of(null))
    );
  }

  delete(id: number): Observable<undefined> {
    return this.sizeRepository.delete(id);
  }
}
