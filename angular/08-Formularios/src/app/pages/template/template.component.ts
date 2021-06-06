import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    nombre: 'Juan Pablo',
    apellido: 'Correa Herrera',
    correo: 'jpchsubzero@gmail.com',
    country: 'ECU',
    genero: ''
  }

  countries: any[] = [];

  constructor(private country: CountryService) { }

  ngOnInit(): void {
    this.getCountries().subscribe(response => {
      this.countries = response;
      this.countries.unshift({
        name:'[Seleccione un país]',
        code: ''
      });
    }, errorResponse => {
      console.log(errorResponse);
    });
  }

  save(formTemplate: NgForm) {
    if (formTemplate.valid) {
      console.log("Formulario válido");
      console.log(formTemplate);
      console.log(formTemplate.value);        
    } else {
      console.log("Formulario inválido");
      Object.values(formTemplate.controls).forEach(x => x.markAsTouched());
      return;
    }
  }

  getCountries() {
    return this.country.getCountries();
  }
}
