import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TypeApplication } from '../../../application/type/type.application';
import { BrandApplication } from '../../../application/brand/brand.application';
import { SizeApplication } from '../../../application/size/size.application';
import { Type } from '../../../domain/type/type';
import { Response } from '../../../../../shared/domain/response';
import { Brand } from '../../../domain/brand/brand';
import { Size } from '../../../domain/size/size';

@Component({
  selector: 'tw-filters',
  standalone: false,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  fullWidth = { width: '100%' };

  labelType = 'Tipos';
  optionsType = [];
  loadingType = false;
  errorType = false;
  valueType = '';
  requestTypeDto = {
    page: {
      page: 0,
      size: 500,
    },
  };

  labelBrand = 'Marcas';
  optionsBrand = [];
  loadingBrand = false;
  errorBrand = false;
  valueBrand = '';
  requestBrandDto = {
    page: {
      page: 0,
      size: 500,
    },
  };

  labelSize = 'Tallas';
  optionsSize = [];
  loadingSize = false;
  errorSize = false;
  valueSize = '';
  requestSizeDto = {
    page: {
      page: 0,
      size: 500,
    },
  };

  @Output() onChangeFilter: EventEmitter<string> = new EventEmitter();

  constructor(
    private readonly typeApplication: TypeApplication,
    private readonly brandApplication: BrandApplication,
    private readonly sizeApplication: SizeApplication
  ) {
    this.loadData();
  }

  private loadData() {
    this.loadingType = true;
    this.loadingBrand = true;
    this.loadingSize = true;

    setTimeout(() => {
      this.typeApplication.list(this.requestTypeDto).subscribe({
        next: (response: Response<Type>) => {
          const { content } = response;
          const types = (
            !Array.isArray(content) || !content ? [] : content
          ) as Array<Type>;
          this.optionsType = types.map((type) => type.properties().name);
        },
        error: () => {
          this.loadingType = false;
        },
        complete: () => {
          this.loadingType = false;
        },
      });
    }, 1000);

    setTimeout(() => {
      this.brandApplication.list(this.requestTypeDto).subscribe({
        next: (response: Response<Brand>) => {
          const { content } = response;
          const brands = (
            !Array.isArray(content) || !content ? [] : content
          ) as Array<Brand>;
          this.optionsBrand = brands.map((brand) => brand.properties().name);
        },
        error: () => {
          this.loadingBrand = false;
        },
        complete: () => {
          this.loadingBrand = false;
        },
      });
    }, 2000);

    setTimeout(() => {
      this.sizeApplication.list(this.requestTypeDto).subscribe({
        next: (response: Response<Size>) => {
          const { content } = response;
          const sizes = (
            !Array.isArray(content) || !content ? [] : content
          ) as Array<Size>;
          this.optionsSize = sizes.map((size) => size.properties().name);
        },
        error: () => {
          this.loadingSize = false;
        },
        complete: () => {
          this.loadingSize = false;
        },
      });
    }, 1000);
  }

  onChangeType($event: string | number) {
    this.valueType = $event + '';
  }

  onErrorType($event: boolean) {
    this.errorType = $event;
  }

  onChangeBrand($event: string | number) {
    this.valueBrand = $event + '';
  }

  onErrorBrand($event: boolean) {
    this.errorBrand = $event;
  }

  onChangeSize($event: string | number) {
    this.valueSize = $event + '';
  }

  onErrorSize($event: boolean) {
    this.errorSize = $event;
  }

  search() {
    const query = this.buildQuery();
    this.onChangeFilter.emit(query);
  }

  private buildQuery(): string {
    const operator = '<eq>'; // means equals and it is defined by a module, contact @EmersonHoruss developer for more details
    const connector = ':and:'; // means and, contact EmersonHoruss developer
    const predicates: Array<string> = [];

    if (!this.errorType && this.valueType) {
      const attribute = 'type.name';
      const predicate = `${attribute}${operator}${this.valueType}`;
      predicates.push(predicate);
    }

    if (!this.errorBrand && this.valueBrand) {
      const attribute = 'brand.name';
      const predicate = `${attribute}${operator}${this.valueBrand}`;
      predicates.push(predicate);
    }

    if (!this.errorSize && this.valueSize) {
      const attribute = 'size.name';
      const predicate = `${attribute}${operator}${this.valueSize}`;
      predicates.push(predicate);
    }

    return predicates.join(connector);
  }

  get disabledSearch() {
    return this.errorType || this.errorBrand || this.errorSize;
  }
}
