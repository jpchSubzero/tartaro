import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): string {
  transform(value: string, capitalizar:boolean = false): string {
      console.log(value);
    // console.log(args);
    // if (args[1]) {
    //   return value.toUpperCase();      
    // }
    value = value.toLowerCase();
    let palabras:string[] = value.split(' ');
    if (capitalizar) {
      return palabras.map(palabra => {return palabra[0].toUpperCase() + palabra.substring(1)}).join(' ');      
    } else {
      return value[0].toUpperCase() + value.substring(1);      
    }
  }
}
