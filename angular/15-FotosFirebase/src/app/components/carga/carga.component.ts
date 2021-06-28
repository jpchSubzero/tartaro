import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreDropElemento:boolean = false;

  archivos:FileItem[] = [];

  constructor(private _cargaImagenes:CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagenes() {
    this._cargaImagenes.cargarImagenes(this.archivos);
  }  

  limpiarArchivos() {
    this.archivos = [];
  }

}
