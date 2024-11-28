import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../application/dtos/response.dto';

export abstract class BaseInfrastructure<CreateDto, UpdateDto, ShowDto> {
  private apiUrl = `${environment.apiUrl}`;

  constructor(
    protected readonly http: HttpClient,
    protected readonly endpoint: string
  ) {
    this.apiUrl = this.apiUrl + this.endpoint;
  }

  create(createDto: CreateDto): Observable<ResponseDto<ShowDto>> {
    return this.http.post<ResponseDto<ShowDto>>(this.apiUrl, createDto);
  }

  update(updateDto: UpdateDto): Observable<ResponseDto<ShowDto>> {
    return this.http.put<ResponseDto<ShowDto>>(this.apiUrl, updateDto);
  }

  listOne(id: number): Observable<ResponseDto<ShowDto>> {
    return this.http.get<ResponseDto<ShowDto>>(`${this.apiUrl}/${id}`);
  }

  list(request: string): Observable<ResponseDto<ShowDto>> {
    return request
      ? this.http.get<ResponseDto<ShowDto>>(`${this.apiUrl}?${request}`)
      : this.http.get<ResponseDto<ShowDto>>(this.apiUrl);
  }

  setActivation(
    id: number,
    activation: boolean
  ): Observable<ResponseDto<ShowDto>> {
    const deleteObj = { id, activated: activation };
    return this.http.patch<ResponseDto<ShowDto>>(this.apiUrl, deleteObj);
  }
}
