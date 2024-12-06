import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, startWith, map, catchError, of } from 'rxjs';

@Component({
  selector: 'tw-autocomplete',
  standalone: false,

  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnChanges {
  @Input() options: string[] = ['Prueba 1', 'Prueba 2'];
  @Input() label: string = 'Entidades';
  @Input() placeholder: string = 'Buscar';
  @Input() loading: boolean = false;
  @Input() errorMessage: string = 'Opción no disponible';

  @Input() formFieldStyles: { [key: string]: string } = {};

  @Output() onChangeAutocomplete = new EventEmitter<string | number>();
  @Output() onErrorDetected = new EventEmitter<boolean>();

  form: FormGroup;
  filteredOptions: Observable<string[]>;

  controlName = 'autocompleteControl';

  constructor() {
    this.form = new FormGroup({
      autocompleteControl: new FormControl({
        value: '',
        disabled: this.loading,
      }),
    });
  }

  ngOnInit() {
    this.setupFilteredOptions();

    this.form
      .get(this.controlName)!
      .valueChanges.subscribe((value: string | number) => {
        this.onChangeAutocomplete.emit(value);
        this.onErrorDetected.emit(!this.isValidOption());

        this.handleManualErrorState();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.setupFilteredOptions();
    }
  }

  private setupFilteredOptions() {
    this.filteredOptions = this.form.get(this.controlName)!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value)),
      catchError(() => of([]))
    );
  }

  private _filter(value: string | number): string[] {
    const filterValue = (value + '').toLowerCase();
    return this.options.filter((option) =>
      (option + '').toLowerCase().includes(filterValue)
    );
  }

  isValidOption(): boolean {
    const value = this.form.get(this.controlName)!.value || '';
    if (value === '') return true;
    return this.options.includes(value);
  }

  handleManualErrorState(): void {
    const control = this.form.get(this.controlName)!;

    if (!this.isValidOption()) {
      control.setErrors({ invalidOption: true });
    } else {
      control.setErrors(null);
    }
  }

  clearInput(): void {
    const control = this.form.get(this.controlName);

    if (this.loading || !control!.value) return;

    control!.setValue('');
    control!.setErrors(null);
  }

  get cleareable() {
    const control = this.form.get(this.controlName);

    return !this.loading && control!.value;
  }
}
