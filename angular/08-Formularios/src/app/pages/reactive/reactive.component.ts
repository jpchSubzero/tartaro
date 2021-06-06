import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formReactive: FormGroup; //Error de inicialización, cambiar "strictPropertyInitialization": false para superarlo

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
    this.loadData();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formReactive = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      direccion: this.formBuilder.group({
        provincia: ['', [Validators.required]],
        ciudad: ['', [Validators.required]]
      }),
      pasatiempos: this.formBuilder.array([])
    });
  }

  addPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control('', Validators.required));
  }

  removePasatiempo(index: number) {
    this.pasatiempos.removeAt(index);
  }

  get nombreNoValido() {
    return this.formReactive.get('nombre')?.invalid && this.formReactive.get('nombre')?.touched;
  }

  get apellidoNoValido() {
    return this.formReactive.get('apellido')?.invalid && this.formReactive.get('apellido')?.touched;
  }

  get correoNoValido() {
    return this.formReactive.get('correo')?.invalid && this.formReactive.get('correo')?.touched;
  }

  get provinciaNoValida() {
    return this.formReactive.get('direccion.provincia')?.invalid && this.formReactive.get('direccion.provincia')?.touched;
  }

  get ciudadNoValida() {
    return this.formReactive.get('direccion.ciudad')?.invalid && this.formReactive.get('direccion.ciudad')?.touched;
  }

  get pasatiempos() {
    return this.formReactive.get('pasatiempos') as FormArray;
  }  

  save() {
    if (this.formReactive.valid) {
      console.log("Formulario válido");
      console.log(this.formReactive);
      console.log(this.formReactive.value);        
      // this.formReactive.reset(); //Limpia todos los campos

      this.formReactive.reset({
        nombre: '',
        apellido: '',
        correo: '',
        direccion: {
          provincia: '',
          ciudad: ''
        }  
      });
    } else {
      console.log("Formulario inválido");
      Object.values(this.formReactive.controls).forEach(x => {
        if (x instanceof FormGroup) {
          Object.values(x.controls).forEach(y => y.markAsTouched());
        } else {
          x.markAsTouched();
        }
      });
      return;
    }    
  }

  loadData() {
    // this.formReactive.setValue({  //Asigna valores a los campos pero deben ser todos los valores
    this.formReactive.reset({ //Asigna valores a campos específicos
      nombre: 'Juan Pablo',
      apellido: 'Correa Herrera',
      correo: 'correo@correo.com',
      direccion: {
        provincia: 'Loja',
        ciudad: 'Loja'
      }
    });
    ['1','2','3','4','5'].forEach((element: string) => this.pasatiempos.push(this.formBuilder.control(element, Validators.required)));
  }
}
