import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class BaseInfrastructure<Entity> {
  private apiUrl = `${environment.apiUrl}`;

  constructor(
    protected readonly http: HttpClient,
    protected readonly endpoint: string
  ) {
    this.apiUrl = this.apiUrl + this.endpoint;
  }

  insert(entity: Entity): Observable<any> {
    return this.http.post(this.apiUrl, entity);
  }

  list() {
    return this.http.get(this.apiUrl);
  }

  listOne(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(entity: Entity) {
    return this.http.put(this.apiUrl, entity);
  }

  delete(id: number) {
    const deleteObj = { id, activated: false };
    return this.http.patch(this.apiUrl, deleteObj);
  }

  page(page: number) {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }
}
