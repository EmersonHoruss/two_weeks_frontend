import { Component } from '@angular/core';
import { Brand, BrandDisplay } from '../../../domain/brand/brand';
import { BrandApplication } from '../../../application/brand/brand.application';
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
  response: Response<Brand>;

  loading: boolean;
  pluralEntity = 'marcas';

  private readonly QUERY_REQUIRED = 'activated<eq>true';

  constructor(
    private readonly utilsService: UtilsService,
    private readonly brandApplication: BrandApplication,
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

    this.brandApplication.list(this.requestDto).subscribe({
      next: (response: Response<Brand>) => {
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

    const brand = new Brand({ name: formValue.name });

    this.brandApplication.create(brand).subscribe({
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

    const brandId = formValue.id;
    this.productApplication.someProductHasBrand(brandId).subscribe({
      next: (someProductHasBrand) => {
        loadingRef.close();
        if (someProductHasBrand) {
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
        'La marca está siendo utilizado por al menos un producto, al actualizarlo puede causar errores. Se recomienda eliminar permanentemente todos los productos relacionados con la marca a actualizar para evitar inconsistencia en datos',
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

    const brand = new Brand({
      id: formValue.id,
      name: formValue.name,
    });

    this.brandApplication.update(brand).subscribe({
      next: (response: Response<Brand>) => {
        modalFormRef.close();
        loadingRef.close();
        this.utilsService.showInformative(
          OperationType.Updating,
          OperationState.Success
        );
        this.response.content = (this.response.content as Array<Brand>).map(
          (currentBrand: Brand) => {
            const currentBrandId = currentBrand.properties().id;
            const updatedBrand = response.content as Brand;
            const updatedBrandId = updatedBrand.properties().id;

            return currentBrandId === updatedBrandId
              ? updatedBrand
              : currentBrand;
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

    this.brandApplication.setActivation(id, false).subscribe({
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

  get dataSource(): Array<BrandDisplay> {
    if (!this.response) return [];

    let { content: brands, pageIndex, pageSize } = this.response;

    brands = !Array.isArray(brands) || !brands ? [] : brands;

    let i = pageIndex * pageSize;
    const brandsDisplay = brands.map((brand: Brand): BrandDisplay => {
      i++;
      const brandDisplay: BrandDisplay = brand.display();
      return { ...brandDisplay, '#': i };
    });

    return brandsDisplay;
  }
}
