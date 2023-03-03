import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(empname: string, gender: string): string {
    if (gender == "Male") {
      return "Mr." + empname
    }
    else {
      return "Miss" + empname
    }
  }

}
