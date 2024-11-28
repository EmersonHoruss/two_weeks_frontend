import { Observable } from 'rxjs';

export interface IApplication<Entity> {
  create(entity: Entity): Observable<any>;

  update(entity: Entity): Observable<any>;
  
  list(): Observable<any>;
  
  listOne(id: number): Observable<any>;

  delete(id: number): Observable<any>;

  page(page: number): Observable<any>;
}
