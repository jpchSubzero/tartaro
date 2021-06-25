import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  formulario: FormGroup = undefined!;

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder:FormBuilder
  ) 
  {
    this.formulario = formBuilder.group({
      'titulo': data.titulo,
      'descripcion': data.descripcion,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  guardarCambios() {
    this.dialogRef.close(this.formulario.value);
  }
}
