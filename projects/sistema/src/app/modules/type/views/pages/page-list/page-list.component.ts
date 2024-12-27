import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import {
  PageRequestDto,
  RequestDto,
} from '../../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../../shared/domain/response';
import { Type, TypeDisplay } from '../../../domain/type/type';
import {
  OperationState,
  OperationType,
  UtilsService,
} from '../../../../../shared/services/utils.service';
import { TypeApplication } from '../../../application/type/type.application';
import { environment } from '../../../../../../environments/environment';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import { FormComponent } from '../../components/form/form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../../../../../shared/components/modals/loading/loading.component';

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

  private readonly QUERY_REQUIRED = 'activated<eq>true';

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
      query: this.QUERY_REQUIRED,
    };
  }

  private loadData() {
    this.loading = true;

    setTimeout(() => {
      this.typeApplication.list(this.requestDto).subscribe({
        next: (response: Response<Type>) => {
          this.response = response;
        },
        error: (error: ExceptionDto) => {
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }, 1000);
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

  createOrUpdate(row?: any) {
    const isCreate = !row;
    const modalFormRef: MatDialogRef<FormComponent> =
      this.utilsService.showModalWindow(FormComponent, {
        disableClose: true,
        data: row,
      });

    modalFormRef.componentInstance.getForm
      .asObservable()
      .subscribe((formValue) => {
        if (!formValue) {
          modalFormRef.close();
          return;
        }

        isCreate
          ? this.handleCreate(formValue, modalFormRef)
          : this.handleUpdate(formValue, modalFormRef);
      });
  }

  private handleCreate(
    formValue: any,
    modalFormRef: MatDialogRef<FormComponent>
  ) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    const type = new Type({ name: formValue.name });

    this.typeApplication.create(type).subscribe({
      next: (result) => {
        modalFormRef.close();
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Creation,
          OperationState.Success
        );
        this.loadData();
      },
      error: (error) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Creation,
          OperationState.Error
        );
      },
    });
  }

  private handleUpdate(
    response: any,
    modalFormRef: MatDialogRef<FormComponent>
  ) {
    // this.typeApplication.update(response).subscribe({
    //   next: (result) => {},
    //   error: (error) => {},
    // });
  }

  delete(id?: number) {
    console.log('id to delete', id);
  }

  get dataSource(): Array<TypeDisplay> {
    if (!this.response) return [];

    let { content: types, pageIndex, pageSize } = this.response;

    types = !Array.isArray(types) || !types ? [] : types;

    let i = pageIndex * pageSize;
    const typesDisplay = types.map((type: Type): TypeDisplay => {
      i++;
      const typeDisplay: TypeDisplay = type.display();
      return { ...typeDisplay, '#': i };
    });

    return typesDisplay;
  }
}
