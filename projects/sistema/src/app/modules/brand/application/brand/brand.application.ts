import { Inject, Injectable, Type } from '@angular/core';
import { BaseApplication } from '../../../../shared/application/base.application';
import { Brand } from '../../domain/brand/brand';
import { BrandCreateDto, BrandShowDto, BrandUpdateDto } from './brand.dto';
import { BrandRepository } from '../../domain/brand/brand.repository';
import { BrandInfrastructure } from '../../infrastructure/brand/brand.infrastructure';
import { BrandMapper } from './brand.mapper';
import { catchError, map, Observable, of } from 'rxjs';
import { RequestDto } from '../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../shared/domain/response';

@Injectable()
export class BrandApplication extends BaseApplication<
  Brand,
  BrandCreateDto,
  BrandUpdateDto,
  BrandShowDto,
  BrandRepository
> {
  constructor(
    @Inject(BrandInfrastructure)
    private readonly brandRepository: BrandRepository,
    private readonly brandMapper: BrandMapper
  ) {
    super(brandRepository, brandMapper);
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
      map((response: Response<Brand>) => {
        const brands = response.content as Array<Brand>;
        if (!brands.length) return null;

        const { name, activated } = brands[0].properties();

        if (name.toLocaleLowerCase() === ignore.toLocaleLowerCase())
          return null;

        if (activated) return { existNameOnActivated: true };
        return { existNameOnDeactivated: true };
      }),
      catchError(() => of(null))
    );
  }

  delete(id: number): Observable<undefined> {
    return this.brandRepository.delete(id);
  }
}
