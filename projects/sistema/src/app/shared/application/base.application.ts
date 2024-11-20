import { BaseRepository } from '../domain/base.repository';

export class BaseApplication<
  Entity,
  Repository extends BaseRepository<Entity>
> {
  constructor(private readonly repository: Repository) {}

  insert(entity: Entity) {
    return this.repository.insert(entity);
  }

  list() {
    return this.repository.list();
  }

  listOne(id: number) {
    return this.repository.listOne(id);
  }

  update(entity: Entity) {
    return this.repository.update(entity);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  page(page: number) {
    return this.repository.page(page);
  }
}
