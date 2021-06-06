import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noApellidoMacas(control: FormControl): ErrorValidate | null { // | null para que permita devolver un valor null sino da error
    if (control.value?.toUpperCase() === 'MACAS') {
      return {
        noApellidoMacas: true
      }        
    }
    return null;
  }

  passwordIguales(password1: string, password2: string) {
    return (formGroup: FormGroup) => {
      const password1Control = formGroup.controls[password1];
      const password2Control = formGroup.controls[password2];

      if (password1Control.value === password2Control.value) {
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({noEsIgual: true});
      }
    }
  }

  existeUsuario(control: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> { // | null para que permita devolver un valor null sino da error
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'lyonn19@gmail.com') {
          resolve({existe: true});
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
}

interface ErrorValidate {
  [s:string]: boolean
}