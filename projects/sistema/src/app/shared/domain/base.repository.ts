import { Observable } from 'rxjs';
import { ResponseDto } from '../application/dtos/response.dto';

export interface BaseRepository<CreateDto, UpdateDto, ShowDto> {
  create(entity: CreateDto): Observable<ResponseDto<ShowDto>>;

  update(entity: UpdateDto): Observable<ResponseDto<ShowDto>>;

  listOne(id: number): Observable<ResponseDto<ShowDto>>;

  list(request: string): Observable<ResponseDto<ShowDto>>;

  setActivation(
    id: number,
    activation: boolean
  ): Observable<ResponseDto<ShowDto>>;
}
