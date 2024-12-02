import { environment } from '../../../environments/environment';
import { RequestDto, SortRequestDto } from '../application/dtos/request.dto';

export abstract class RequestFactory {
  public static toString(requestDto: RequestDto): string {
    const { pageIndex, pageSize } = environment;
    const { page: pageRequestDto, sort, query } = requestDto;
    let params: string[] = [];

    const { page = pageIndex, size = pageSize } = pageRequestDto;
    params.push(`page=${page}`);
    params.push(`size=${size}`);

    if (sort && sort.length > 0) {
      sort.forEach((sortRequest: SortRequestDto) => {
        params.push(`sort=${sortRequest.field},${sortRequest.direction}`);
      });
    }

    if (query && query.trim() !== '') {
      params.push(`query=${query}`);
    }

    return params.join('&');
  }
}
