import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../../../../../shared/components/modals/loading/loading.component';
import {
  OperationState,
  OperationType,
  UtilsService,
} from '../../../../../shared/services/utils.service';
import { ExceptionDto } from '../../../../../shared/application/dtos/exception.dto';
import { Caja } from '../../../domain/caja/caja';
import { CajaApplication } from '../../../application/caja/caja.application';

@Component({
  selector: 'tw-page-open',
  templateUrl: './page-open.component.html',
  styleUrl: './page-open.component.scss',
  standalone: false,
})
export class PageOpenComponent {
  constructor(
    private readonly router: Router,
    private readonly utilsService: UtilsService,
    private readonly cajaApplication: CajaApplication
  ) {}

  historical() {
    this.router.navigate(['/caja/historial']);
  }

  save(caja: Caja) {
    const loadingRef: MatDialogRef<LoadingComponent> =
      this.utilsService.showLoading();

    this.cajaApplication.create(caja).subscribe({
      next: () => {
        loadingRef.close();

        this.historical();
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
}
