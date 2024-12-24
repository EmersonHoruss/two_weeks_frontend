import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { Observable } from 'rxjs';
import { LoadingComponent } from '../components/loading/loading.component';
import {
  Informative,
  InformativeComponent,
} from '../components/informative/informative.component';

export enum OperationType {
  Creation = 'Creation',
  Updating = 'Updating',
  Deletion = 'Deletion',
}

export enum OperationState {
  Error = 'Error',
  Success = 'Success',
}

@Injectable()
export class UtilsService {
  private readonly DEFAULT_CONFIRM_MESSAGE = '¿Estás seguro de continuar?';

  private readonly DEFAULT_SUCCESS_CREATION_MESSAGE = 'Creación exitosa';
  private readonly DEFAULT_ERROR_CREATION_MESSAGE = 'Creación fallida';

  private readonly DEFAULT_SUCCESS_UPDATING_MESSAGE = 'Actualización exitosa';
  private readonly DEFAULT_ERROR_UPDATING_MESSAGE = 'Actualización fallida';

  private readonly DEFAULT_SUCCESS_DELETION_MESSAGE = 'Eliminación exitosa';
  private readonly DEFAULT_ERROR_DELETION_MESSAGE = 'Eliminación fallida';

  private readonly DEFAULT_SIZE = '340px'; // it looks good in mobile devices

  constructor(private readonly dialog: MatDialog) {}

  showModalWindow(
    classComponent: any,
    options: { [s: string]: string | number | boolean | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }

  showConfirm(message: string = this.DEFAULT_CONFIRM_MESSAGE): Observable<any> {
    const reference = this.dialog.open(ConfirmComponent, {
      width: this.DEFAULT_SIZE,
      disableClose: true,
    });

    if (message) {
      reference.componentInstance.messageToConfirm = message;
    }

    return reference.afterClosed();
  }

  showInformative(
    type: OperationType,
    state: OperationState,
    message: string = ''
  ): void {
    let finalMessage = this.getInformativeMessage(type, state, message);
    const data: Informative = {
      state,
      message: finalMessage,
    };
    this.dialog.open(InformativeComponent, {
      width: this.DEFAULT_SIZE,
      disableClose: true,
      data,
    });
  }

  private getInformativeMessage(
    type: OperationType,
    state: OperationState,
    message: string
  ): string {
    if (message === '') {
      if (type === OperationType.Creation && state === OperationState.Success)
        return this.DEFAULT_SUCCESS_CREATION_MESSAGE;

      if (type === OperationType.Creation && state === OperationState.Error)
        return this.DEFAULT_ERROR_CREATION_MESSAGE;

      if (type === OperationType.Updating && state === OperationState.Success)
        return this.DEFAULT_SUCCESS_UPDATING_MESSAGE;

      if (type === OperationType.Updating && state === OperationState.Error)
        return this.DEFAULT_ERROR_UPDATING_MESSAGE;

      if (type === OperationType.Deletion && state === OperationState.Success)
        return this.DEFAULT_SUCCESS_DELETION_MESSAGE;

      if (type === OperationType.Deletion && state === OperationState.Error)
        return this.DEFAULT_ERROR_DELETION_MESSAGE;
    }

    return message;
  }

  showLoading(): MatDialogRef<LoadingComponent> {
    return this.dialog.open(LoadingComponent, {
      width: this.DEFAULT_SIZE,
      disableClose: true,
    });
  }
}
