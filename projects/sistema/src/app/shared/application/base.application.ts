import { map, Observable } from 'rxjs';
import { BaseRepository } from '../domain/base.repository';
import { RequestDto } from './dtos/request.dto';
import { IMapper } from './mapper/mapper.interface';
import { Response } from '../domain/response';
import { ResponseMapper } from './mapper/response.mapper';
import { ResponseDto } from './dtos/response.dto';
import { RequestFactory } from '../domain/request.factory';
export class BaseApplication<
  Entity,
  CreateDto,
  UpdateDto,
  ShowDto,
  Repository extends BaseRepository<CreateDto, UpdateDto, ShowDto>
> {
  constructor(
    private readonly repository: Repository,
    private readonly mapper: IMapper<
      Entity,
      CreateDto,
      UpdateDto,
      ShowDto
    >
  ) {}

  create(entity: Entity): Observable<Response<Entity>> {
    const createDto: CreateDto = this.mapper.toCreateDto(entity);
    return this.repository
      .create(createDto)
      .pipe(
        map((response: ResponseDto<ShowDto>) =>
          new ResponseMapper<Entity, ShowDto>(this.mapper.toEntity).toEntity(
            response
          )
        )
      );
  }

  update(entity: Entity): Observable<Response<Entity>> {
    const updateDto: UpdateDto = this.mapper.toUpdateDto(entity);
    return this.repository
      .update(updateDto)
      .pipe(
        map((response: ResponseDto<ShowDto>) =>
          new ResponseMapper<Entity, ShowDto>(this.mapper.toEntity).toEntity(
            response
          )
        )
      );
  }

  listOne(id: number): Observable<Response<Entity>> {
    return this.repository
      .listOne(id)
      .pipe(
        map((response: ResponseDto<ShowDto>) =>
          new ResponseMapper<Entity, ShowDto>(this.mapper.toEntity).toEntity(
            response
          )
        )
      );
  }

  list(requestDto: RequestDto): Observable<Response<Entity>> {
    const requestStr = RequestFactory.toString(requestDto);
    return this.repository
      .list(requestStr)
      .pipe(
        map((response: ResponseDto<ShowDto>) =>
          new ResponseMapper<Entity, ShowDto>(this.mapper.toEntity).toEntity(
            response
          )
        )
      );
  }

  setActivation(id: number, activation: boolean): Observable<Response<Entity>> {
    return this.repository
      .setActivation(id, activation)
      .pipe(
        map((response: ResponseDto<ShowDto>) =>
          new ResponseMapper<Entity, ShowDto>(this.mapper.toEntity).toEntity(
            response
          )
        )
      );
  }
}
