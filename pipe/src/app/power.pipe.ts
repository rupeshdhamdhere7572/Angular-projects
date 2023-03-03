import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, expo: number): number {
    let i, pow = 1;
    for (i = 1; i <= expo; i++) {
      pow *= value;
    }
    return pow;
  }


}
