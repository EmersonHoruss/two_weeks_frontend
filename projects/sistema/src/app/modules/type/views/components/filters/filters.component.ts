import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tw-filters',
  standalone: false,

  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  label: string = 'Nombre';
  placeholder: string = 'Buscar';

  form: FormGroup;

  controlName: string = 'inputControl';

  @Output() onChangeFilter: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.form = new FormGroup({
      inputControl: new FormControl(''),
    });
  }

  clearInput() {
    const control = this.form.get(this.controlName);

    if (!control.value) return;

    control.setValue('');
    control.setErrors(null);
  }

  search() {
    const nameValue = this.form.get(this.controlName).value;
    if (!nameValue) {
      this.onChangeFilter.emit('');
      return;
    }

    const attribute = 'name';
    const operator = '<ct>';
    const predicate = `${attribute}${operator}${nameValue}`;
    this.onChangeFilter.emit(predicate);
  }

  get clearable(): boolean {
    const control = this.form.get(this.controlName);

    return control.value;
  }
}
