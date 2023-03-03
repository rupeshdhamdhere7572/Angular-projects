import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:string , g:string): string {
    if (g == "Male")
    {
      return "Mr." + name;
    }
    else
    {
      return "Miss " + name;
    }
  }
  

}
