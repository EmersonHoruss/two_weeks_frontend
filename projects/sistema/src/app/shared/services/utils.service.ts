import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  ConfirmComponent,
  ConfirmData,
} from '../components/modals/confirm/confirm.component';
import { Observable } from 'rxjs';
import { LoadingComponent } from '../components/modals/loading/loading.component';
import {
  Informative,
  InformativeComponent,
} from '../components/modals/informative/informative.component';

export enum OperationType {
  Creation = 'Creation',
  Updating = 'Updating',
  Deletion = 'Deletion',
  Restore = 'Restore',
  DeletionForever = 'DeletionForever',
}

export enum OperationState {
  Error = 'Error',
  Success = 'Success',
}

@Injectable()
export class UtilsService {
  private readonly DEFAULT_SUCCESS_CREATION_MESSAGE = 'Creación exitosa';
  private readonly DEFAULT_ERROR_CREATION_MESSAGE = 'Creación fallida';

  private readonly DEFAULT_SUCCESS_UPDATING_MESSAGE = 'Actualización exitosa';
  private readonly DEFAULT_ERROR_UPDATING_MESSAGE = 'Actualización fallida';

  private readonly DEFAULT_SUCCESS_DELETION_MESSAGE = 'Eliminación exitosa';
  private readonly DEFAULT_ERROR_DELETION_MESSAGE = 'Eliminación fallida';

  private readonly DEFAULT_SUCCESS_RESTORE_MESSAGE = 'Recuperación exitosa';
  private readonly DEFAULT_ERROR_RESTORE_MESSAGE = 'Recuperación fallida';

  private readonly DEFAULT_SUCCESS_DELETION_FOREVER_MESSAGE =
    'Eliminación para siempre exitosa';
  private readonly DEFAULT_ERROR_DELETION_FOREVER_MESSAGE =
    'Eliminación para siempre fallida';

  private readonly DEFAULT_SIZE = '340px'; // it looks good in mobile devices

  constructor(private readonly dialog: MatDialog) {}

  showModalWindow(
    classComponent: any,
    options: { [s: string]: string | number | boolean | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }

  showConfirm(confirmData: ConfirmData): Observable<boolean> {
    const reference = this.dialog.open(ConfirmComponent, {
      width: this.DEFAULT_SIZE,
      disableClose: true,
      data: confirmData,
    });

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

      if (type === OperationType.Restore && state === OperationState.Success)
        return this.DEFAULT_SUCCESS_RESTORE_MESSAGE;

      if (type === OperationType.Restore && state === OperationState.Error)
        return this.DEFAULT_ERROR_RESTORE_MESSAGE;

      if (
        type === OperationType.DeletionForever &&
        state === OperationState.Success
      )
        return this.DEFAULT_SUCCESS_DELETION_FOREVER_MESSAGE;

      if (
        type === OperationType.DeletionForever &&
        state === OperationState.Error
      )
        return this.DEFAULT_ERROR_DELETION_FOREVER_MESSAGE;
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
