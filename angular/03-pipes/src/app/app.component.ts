import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre1: string = 'jUaN pABlO CoRREA hErrerA';
  numeros: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.257;
  salario: number = 12345.34;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    direccion: {
      calle: 'Principal',
      numero: 123
    }
  };
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
  fecha:Date = new Date('2008/12/24');
  idioma:string = 'en';
  video:string = 'https://www.youtube.com/embed/B7DoVitihng';
  activar:boolean = true;
  activarEtiquetaMostrar:string = 'Mostrar';
  activarEtiquetaOcultar:string = 'Ocultar';
  activarEtiqueta:string = this.activarEtiquetaMostrar;

  CambiarIdioma(idioma:string) {
    this.idioma = idioma;
  }

  activarDesactivarPassword() {
    this.activar = !this.activar;
    if (this.activar) {
      this.activarEtiqueta = this.activarEtiquetaMostrar;      
    } else {
      this.activarEtiqueta = this.activarEtiquetaOcultar;      
    }

  }  
}


