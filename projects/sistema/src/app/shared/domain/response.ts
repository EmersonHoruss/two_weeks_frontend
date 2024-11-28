export interface Response<Entity> {
  content: Entity | Array<Entity>;
  pageIndex: number;
  totalPages: number;
  totalElements: number;
}
