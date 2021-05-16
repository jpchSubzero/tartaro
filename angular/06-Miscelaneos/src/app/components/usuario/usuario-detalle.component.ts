import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(
    private router:ActivatedRoute
  ) { 
    this.router.parent?.params.subscribe(parameters => {
      console.log('Ruta hija detalle');
      console.log(parameters);
    });
  }


  ngOnInit(): void {
  }

}
