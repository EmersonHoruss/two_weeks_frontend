import { Component } from '@angular/core';
import { Response } from '../../../../../shared/domain/response';
import { Size, SizeDisplay } from '../../../domain/size/size';
import { SizeApplication } from '../../../application/size/size.application';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import {
  RequestDto,
  PageRequestDto,
} from '../../../../../shared/application/dtos/request.dto';
import { LoadingComponent } from '../../../../../shared/components/modals/loading/loading.component';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import {
  UtilsService,
  OperationType,
  OperationState,
} from '../../../../../shared/services/utils.service';

@Component({
  selector: 'tw-page-list-garbage',
  standalone: false,

  templateUrl: './page-list-garbage.component.html',
  styleUrl: './page-list-garbage.component.scss',
})
export class PageListGarbageComponent {
  metaColumns: Array<MetaColumn> = [
    { field: '#', title: '#', isVisible: true },
    { field: 'name', title: 'Nombre', isVisible: true },
  ];

  requestDto: RequestDto;
  response: Response<Size>;

  loading: boolean;
  pluralEntity = 'marcas';

  private readonly QUERY_REQUIRED = 'activated<eq>false';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly sizeApplication: SizeApplication
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
      query: this.QUERY_REQUIRED,
    };
  }

  private loadData() {
    this.loading = true;

    this.sizeApplication.list(this.requestDto).subscribe({
      next: (response: Response<Size>) => {
        this.response = response;
      },
      error: (error: ExceptionDto) => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  paginate($event: PageRequestDto) {
    if (this.requestDto.page === $event) return;

    this.requestDto.page = $event;
    this.loadData();
  }

  filter($event: string) {
    if (this.requestDto.query === $event) return;

    this.requestDto.query = $event
      ? `${this.QUERY_REQUIRED}:and:${$event}`
      : this.QUERY_REQUIRED;
    this.loadData();
  }

  public restore(id: number) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    this.sizeApplication.setActivation(id, true).subscribe({
      next: () => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Restore,
          OperationState.Success
        );
        this.loadData();
      },
      error: (exception: ExceptionDto) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Restore,
          OperationState.Error,
          exception.message
        );
      },
    });
  }

  public deleteForever(id: number) {
    const sizeName = (this.response.content as Array<Size>)
      .filter((size: Size) => +size.properties().id === +id)[0]
      .properties().name;

    const confirmRef: Observable<boolean> = this.utilsService.showConfirm({
      headerMessage: `¿Estás seguro de eliminar la talla: ${sizeName}?`,
      message: 'Después de eliminar la talla será imposible recuperarlo',
    });

    confirmRef.subscribe({
      next: (response) => {
        if (response) this.continueDeleteForever(id);
      },
    });
  }

  private continueDeleteForever(id: number) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    this.sizeApplication.delete(id).subscribe({
      next: () => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.DeletionForever,
          OperationState.Success
        );
        this.loadData();
      },
      error: (exception: ExceptionDto) => {
        console.log(exception);
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.DeletionForever,
          OperationState.Error,
          exception.message
        );
      },
    });
  }

  get dataSource(): Array<SizeDisplay> {
    if (!this.response) return [];

    let { content: sizes, pageIndex, pageSize } = this.response;

    sizes = !Array.isArray(sizes) || !sizes ? [] : sizes;

    let i = pageIndex * pageSize;
    const sizesDisplay = sizes.map((size: Size): SizeDisplay => {
      i++;
      const sizeDisplay: SizeDisplay = size.display();
      return { ...sizeDisplay, '#': i };
    });

    return sizesDisplay;
  }
}
