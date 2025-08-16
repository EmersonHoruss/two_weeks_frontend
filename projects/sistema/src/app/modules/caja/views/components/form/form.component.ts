import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CajaCreateDto,
  CajaUpdateDto,
} from '../../../application/caja/caja.dto';

@Component({
  selector: 'tw-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: false,
})
export class FormComponent {
  form!: FormGroup;
  @Input() data: Partial<CajaUpdateDto> | null;
  @Output() getForm = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    const now = new Date();
    const offset = -now.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const pad = (n: number) => String(Math.floor(Math.abs(n))).padStart(2, '0');
    const formattedDate = `${now.getFullYear()}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(
      now.getMinutes()
    )}:${pad(now.getSeconds())}${sign}${pad(offset / 60)}:${pad(offset % 60)}`;

    this.form = this.fb.group({
      id: new FormControl(this.data?.id),
      fecha: [
        { value: this.data?.fecha ?? formattedDate, disabled: true },
        Validators.required,
      ],
      montoInicial: [
        this.data?.montoInicial ?? 0,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  save(): void {
    if (this.form.valid) {
      const dto: CajaCreateDto = this.form.getRawValue();
      this.getForm.emit(dto);
    }
  }
}
