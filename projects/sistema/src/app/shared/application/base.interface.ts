import { Observable } from 'rxjs';

export interface IApplication<Entity> {
  insert(entity: Entity): Observable<any>;

  list(): Observable<any>;

  listOne(id: number): Observable<any>;

  update(entity: Entity): Observable<any>;

  delete(id: number): Observable<any>;

  page(page: number): Observable<any>;
}
