import { Observable } from 'rxjs';
import { ResponseDto } from '../application/dtos/response.dto';

export interface BaseRepository<CreateDto, UpdateDto, ShowDto> {
  create(entity: CreateDto): Observable<null>;

  update(entity: UpdateDto): Observable<null>;

  listOne(id: number): Observable<ResponseDto<ShowDto>>;

  list(request: string): Observable<ResponseDto<ShowDto>>;

  setActivation(
    id: number,
    activation: boolean
  ): Observable<null>;
}
