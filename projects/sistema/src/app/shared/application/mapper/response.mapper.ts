import { Response } from '../../domain/response';
import { ResponseDto } from '../dtos/response.dto';

export class ResponseMapper<Entity, ShowDto> {
  constructor(private readonly toEntityMapper: (dto: ShowDto) => Entity) {}

  toEntity(dto: ResponseDto<ShowDto>): Response<Entity> {
    return {
      content: Array.isArray(dto.content)
        ? dto.content.map(this.toEntityMapper)
        : this.toEntityMapper(dto.content),
      pageIndex: dto?.pageable?.page?.number,
      pageSize: dto?.pageable?.page?.size,
      totalElements: dto?.pageable?.totalElements,
    };
  }
}
