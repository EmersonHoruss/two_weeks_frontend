export interface Response<Entity> {
  content: Entity | Array<Entity>;
  pageIndex?: number;
  pageSize?: number;
  totalPages?: number;
  totalElements?: number;
}
