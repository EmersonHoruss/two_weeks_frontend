import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Caja } from '../../../domain/caja/caja';

@Component({
  selector: 'tw-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: false,
})
export class FormComponent {
  form!: FormGroup;
  @Input() data: Partial<Caja> | null;
  @Output() getForm = new EventEmitter<Caja>();

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.form.patchValue(changes['data'].currentValue);
    }
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
      id: new FormControl(this.data?.properties()?.id),
      fecha: [
        {
          value: this.data?.properties()?.fecha ?? formattedDate,
          disabled: true,
        },
        Validators.required,
      ],
      montoInicial: [
        this.data?.properties()?.montoInicial ?? 0,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  save(): void {
    if (this.form.valid) {
      const { id, fecha, montoInicial } = this.form.getRawValue();
      const caja = new Caja({ id, fecha, montoInicial });
      this.getForm.emit(caja);
    }
  }
}
