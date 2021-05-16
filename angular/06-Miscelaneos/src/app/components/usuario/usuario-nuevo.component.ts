import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private router:ActivatedRoute
  ) { 
    this.router.parent?.params.subscribe(parameters => {
      console.log('Ruta hija nuevo');
      console.log(parameters);
    });
  }


  ngOnInit(): void {
  }

}
