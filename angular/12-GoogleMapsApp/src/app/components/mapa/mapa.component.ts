import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from '../mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;
  map: google.maps.Map = undefined!;
  mapClickListener:google.maps.MapsEventListener = undefined!;

  constructor(
    private zone: NgZone, 
    private _snackBar: MatSnackBar, 
    public dialog: MatDialog
  ) { 
    const marcadoresGuardados = localStorage.getItem('marcadores');
    if (marcadoresGuardados) {
      this.leerMarcadores(marcadoresGuardados);
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador(evento:google.maps.MouseEvent)  {
    const marcadorNuevo = new Marcador(evento.latLng.lat(), evento.latLng.lng());
    this.marcadores.push(marcadorNuevo);
    this.guardarStorage();
    this.mostrarSnackbar('Marcador agregado', 'Cerrar');
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  leerMarcadores(marcadoresGuardados:string)  {
    this.marcadores = JSON.parse(marcadoresGuardados);
  }

  borrarMarcador(i:number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.mostrarSnackbar('Marcador eliminado', 'Cerrar');
  }

  mostrarSnackbar(mensaje: string, boton:string) {
    this._snackBar.open(mensaje, boton, {duration: 3000, panelClass: ['blue-snackbar']}); //css en styles.css
  }

  editarMarcador(marcador:Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        marcador.titulo = result.titulo;
        marcador.descripcion = result.descripcion;
        this.guardarStorage();        
        this.mostrarSnackbar('Marcador actualizado', 'Cerrar');
      }
    });
  }  

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (evento: google.maps.MouseEvent) => {
      this.zone.run(() => {
        this.agregarMarcador(evento);
      });      
    });
  }  

  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }  
}

