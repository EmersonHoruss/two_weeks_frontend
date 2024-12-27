import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmData {
  headerMessage?: string;
  message?: string;
}
@Component({
  selector: 'tw-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
  standalone: false,
})
export class ConfirmComponent {
  DEFAULT_HEADER_MESSAGE = '¿Estás seguro de continuar?';

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public confirmData: ConfirmData
  ) {
    this.confirmData.headerMessage = !this.confirmData.headerMessage
      ? this.DEFAULT_HEADER_MESSAGE
      : this.confirmData.headerMessage;
  }

  onAccept(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
