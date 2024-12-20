import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import { RequestDto } from '../../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../../shared/domain/response';
import { Type } from '../../../domain/type/type';
import { UtilsService } from '../../../../../shared/services/utils.service';
import { TypeApplication } from '../../../application/type/type.application';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'tw-page-list',
  standalone: false,

  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
})
export class PageListComponent {
  metaColumns: Array<MetaColumn> = [
    { field: '#', title: '#', isVisible: true },
    { field: 'name', title: 'Nombre', isVisible: true },
  ];

  requestDto: RequestDto;
  response: Response<Type>;

  loading: boolean;
  pluralEntity = 'tipos';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly typeApplication: TypeApplication
  ) {
    this.initializeRequestDto();
    this.loadData();
  }

  private initializeRequestDto() {
    this.requestDto = {
      page: {
        page: environment.pageIndex,
        size: environment.pageSize,
      },
      query: 'activated<eq>true',
    };
  }

  private loadData() {}

  showModalWindow() {}

  filter($event) {}

  paginate($event) {}
}
