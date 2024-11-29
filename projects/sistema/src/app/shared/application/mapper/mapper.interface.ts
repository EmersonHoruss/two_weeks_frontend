export interface IMapper<Entity, CreateDto, UpdateDto, ShowDto> {
  toEntity(showDto: ShowDto): Entity;

  toCreateDto(entity: Entity): CreateDto;
  
  toUpdateDto(entity: Entity): UpdateDto;
}
