import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horas',
  standalone: true
})
export class HorasPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) {
      return '1 hora';
    }
    return `${value} horas`;
  }
}
