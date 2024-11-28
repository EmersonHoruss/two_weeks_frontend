export interface IMapper<Entity, EntityUpdate, CreateDto, UpdateDto, ShowDto> {
  toEntity(showDto: ShowDto): Entity;

  toCreateDto(entity: Entity): CreateDto;
  
  toUpdateDto(entity: EntityUpdate): UpdateDto;
}
