import { Component } from '@angular/core';
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
import { ProductApplication } from '../../../../product/application/product/product.application';
import { SizeApplication } from '../../../application/size/size.application';
import { Size, SizeDisplay } from '../../../domain/size/size';
import { FormComponent } from '../../components/form/form.component';
import { Response } from '../../../../../shared/domain/response';

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
  response: Response<Size>;

  loading: boolean;
  pluralEntity = 'tallas';

  private readonly QUERY_REQUIRED = 'activated<eq>true';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly sizeApplication: SizeApplication,
    private readonly productApplication: ProductApplication
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

    const size = new Size({ name: formValue.name });

    this.sizeApplication.create(size).subscribe({
      next: () => {
        modalFormRef.close();
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Creation,
          OperationState.Success
        );
        this.loadData();
      },
      error: (exception: ExceptionDto) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Creation,
          OperationState.Error,
          exception.message
        );
      },
    });
  }

  private handleUpdate(
    formValue: any,
    modalFormRef: MatDialogRef<FormComponent>
  ) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    const sizeId = formValue.id;
    this.productApplication.someProductHasSize(sizeId).subscribe({
      next: (someProductHasSize) => {
        loadingRef.close();
        if (someProductHasSize) {
          this.manageConfirmUpdating(formValue, modalFormRef);
        } else {
          this.continueUpdate(formValue, modalFormRef);
        }
      },
      error: (exception: ExceptionDto) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Updating,
          OperationState.Error,
          exception.message
        );
      },
    });
  }

  private manageConfirmUpdating(
    formValue: any,
    modalFormRef: MatDialogRef<FormComponent>
  ) {
    const confirmRef: Observable<boolean> = this.utilsService.showConfirm({
      message:
        'La talla está siendo utilizado por al menos un producto, al actualizarlo puede causar errores. Se recomienda eliminar permanentement todos los productos relacionados con la talla a actualizar para evitar inconsistencia en datos',
    });
    confirmRef.subscribe({
      next: (response) => {
        if (response) this.continueUpdate(formValue, modalFormRef);
      },
    });
  }

  private continueUpdate(
    formValue: any,
    modalFormRef: MatDialogRef<FormComponent>
  ) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    const size = new Size({
      id: formValue.id,
      name: formValue.name,
    });

    this.sizeApplication.update(size).subscribe({
      next: (response: Response<Size>) => {
        modalFormRef.close();
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Updating,
          OperationState.Success
        );
        this.response.content = (this.response.content as Array<Size>).map(
          (currentSize: Size) => {
            const currentSizeId = currentSize.properties().id;
            const updatedSize = response.content as Size;
            const updatedSizeId = updatedSize.properties().id;

            return currentSizeId === updatedSizeId ? updatedSize : currentSize;
          }
        );
      },
      error: (error: ExceptionDto) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Updating,
          OperationState.Error,
          error.message
        );
      },
    });
  }

  delete(id: number) {
    const confirmRef: Observable<boolean> = this.utilsService.showConfirm({
      headerMessage: '¿Está seguro de eliminar?',
    });

    confirmRef.subscribe({
      next: (response) => {
        if (!response) return;

        this.handleDelete(id);
      },
    });
  }

  private handleDelete(id: number) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    this.sizeApplication.setActivation(id, false).subscribe({
      next: () => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Deletion,
          OperationState.Success
        );
        this.loadData();
      },
      error: (exception: ExceptionDto) => {
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Deletion,
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
