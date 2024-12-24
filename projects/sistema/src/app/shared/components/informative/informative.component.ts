import { Component, Inject } from '@angular/core';
import { OperationState } from '../../services/utils.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface Informative {
  state: OperationState;
  message: string;
}

@Component({
  selector: 'tw-informative',
  standalone: false,

  templateUrl: './informative.component.html',
  styleUrl: './informative.component.scss',
})
export class InformativeComponent {
  public iconMap = {
    [OperationState.Success]: 'check_circle',
    [OperationState.Error]: 'error',
  };

  public colorMap = {
    [OperationState.Success]: 'primary',
    [OperationState.Error]: 'warn',
  };

  constructor(
    public dialogRef: MatDialogRef<InformativeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Informative
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
