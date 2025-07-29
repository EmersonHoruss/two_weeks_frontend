import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TypeApplication } from '../../../application/type/type.application';
import { Observable } from 'rxjs';

@Component({
  selector: 'tw-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form: FormGroup;
  title: string;
  @Output() getForm = new EventEmitter<any>();

  constructor(
    private readonly typeApplication: TypeApplication,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = `${this.data ? 'Actualizar' : 'Crear'} Tipo`;
    this.form = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(
        this.data?.name,
        [Validators.required],
        [this.validateName()]
      ),
    });
  }

  private validateName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      control?.markAsTouched();
      return this.typeApplication.validateName(
        control?.value?.trim(),
        this.data?.name ?? ''
      );
    };
  }

  public get nameError(): string {
    const nameControl = this.form.get('name');
    if (nameControl?.hasError('required')) return 'Es requerido';
    if (nameControl?.hasError('existNameOnActivated'))
      return 'El nombre ya existe';
    if (nameControl?.hasError('existNameOnDeactivated'))
      return 'El nombre ya existe, pero el tipo está eliminado';

    return null;
  }

  public get nameBeingValidatedAsync(): boolean {
    const nameControl = this.form.get('name');
    return nameControl?.pending;
  }

  public save() {
    this.getForm.emit(this.form.value);
  }

  public close() {
    this.getForm.emit(null);
  }
}
