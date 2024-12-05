import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashNull',
  standalone: false,
})
export class DashNullPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value === null || value === undefined ? '—' : value;
  }
}
