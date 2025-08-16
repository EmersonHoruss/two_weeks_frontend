import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  OperationState,
  OperationType,
  UtilsService,
} from '../../../../../shared/services/utils.service';
import { CajaApplication } from '../../../application/caja/caja.application';
import { Caja } from '../../../domain/caja/caja';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../../../../../shared/components/modals/loading/loading.component';
import { Response } from '../../../../../shared/domain/response';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';

@Component({
  selector: 'tw-page-update',
  templateUrl: './page-update.component.html',
  styleUrl: './page-update.component.scss',
  standalone: false,
})
export class PageUpdateComponent {
  caja: Caja;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly utilsService: UtilsService,
    private readonly cajaApplication: CajaApplication
  ) {}

  ngOnInit() {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    const cajaId = +this.route.snapshot.paramMap.get('id')!;

    this.cajaApplication.listOne(cajaId).subscribe({
      next: (data: Response<Caja>) => {
        this.caja = JSON.parse(JSON.stringify(data.content)) as Caja;

        loadingRef.close();
      },
      error: (error: ExceptionDto) => {
        loadingRef.close();

        this.historical();
      },
    });
  }

  historical() {
    this.router.navigate(['/caja/historial']);
  }

  save(caja: Caja) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    const { id, fecha, montoInicial } = caja.properties();
    console.log("🚀 ~ PageUpdateComponent ~ save ~ id:", id)

    const cajaToUpdate: Caja = new Caja({ id, fecha, montoInicial });

    this.cajaApplication.update(cajaToUpdate).subscribe({
      next: () => {
        loadingRef.close();

        this.historical();
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
}
