import { Component } from '@angular/core';
import { MetaColumn } from '../../../../../shared/interfaces/metacolumn.interface';
import {
  PageRequestDto,
  RequestDto,
} from '../../../../../shared/application/dtos/request.dto';
import { Response } from '../../../../../shared/domain/response';
import { Caja, CajaDisplay } from '../../../domain/caja/caja';
import { environment } from '../../../../../../environments/environment';
import { CajaApplication } from '../../../application/caja/caja.application';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import { Router } from '@angular/router';
import { CajaShowDto } from '../../../application/caja/caja.dto';

@Component({
  selector: 'tw-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
  standalone: false,
})
export class PageListComponent {
  metaColumns: Array<MetaColumn> = [
    { field: '#', title: '#', isVisible: true },
    { field: 'fecha', title: 'Fecha', isVisible: true },
    { field: 'montoInicial', title: 'Monto Inicial', isVisible: true },
    { field: 'montoFinalFisico', title: 'Monto Final Físico', isVisible: true },
    {
      field: 'montoFinalDigital',
      title: 'Monto Final Digital',
      isVisible: true,
    },
    { field: 'ganacia', title: 'Ganancia', isVisible: true },
  ];

  requestDto: RequestDto;
  response: Response<Caja>;

  loading: boolean = true;
  pluralEntity: string = 'cajas';

  constructor(
    private readonly cajaApplication: CajaApplication,
    private readonly router: Router
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
      query: '',
    };
  }

  private loadData() {
    this.loading = true;

    this.cajaApplication.list(this.requestDto).subscribe({
      next: (response: Response<Caja>) => {
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

  open() {
    this.router.navigate(['/caja/abrir']);
  }

  update(id: number) {
    this.router.navigate(['/caja/actualizar', id]);
  }

  get dataSource(): Array<CajaDisplay> {
    if (!this.response) return [];

    let { content: cajas, pageIndex, pageSize } = this.response;

    cajas = !Array.isArray(cajas) || !cajas ? [] : cajas;

    let i = pageIndex * pageSize;
    const cajasDisplay = cajas.map((caja: Caja): CajaDisplay => {
      i++;
      const cajaDisplay: CajaDisplay = caja.display();
      return { ...cajaDisplay, '#': i };
    });

    return cajasDisplay;
  }
}
