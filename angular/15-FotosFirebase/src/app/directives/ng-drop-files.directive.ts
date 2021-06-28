import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input()
  archivos:FileItem[] = [];

  @Output()
  mouseSobre:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public entroEnElemento(event:Event) {
    this.mouseSobre.emit(true);
    this.prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public salioDeElemento(event:Event) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public soltarElemento(event:Event) {
    const transferencia = this.getTransferencia(event);
    if (!transferencia) {
      return;
    }
    this.extraerArchivos(transferencia.files);
    this.prevenirDetener(event);
    this.mouseSobre.emit(false);
  }

  private getTransferencia(event:any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extraerArchivos(archivosLista:FileList) {
    Object.getOwnPropertyNames(archivosLista).forEach(x => {

      if (this.archivoCargable(archivosLista[parseInt(x)])) {
        this.archivos.push(new FileItem(archivosLista[parseInt(x)]));
      }
    });
  }

//#region Validaciones

private archivoCargable(archivo:File):boolean {
  if (!this.archivoEnlistado(archivo.name) && this.esImagen(archivo.type)) {
    return true;
  }
  return false;
}

private prevenirDetener(event:Event) {
  event.preventDefault();
  event.stopPropagation();
}

private archivoEnlistado(archivo:string):boolean {
  if (this.archivos.filter(x => x.nombre === archivo).length === 0) {
    return false;
  }
  return true;
}

private esImagen(tipoArchivo:string):boolean {
  return (tipoArchivo == '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
}

//#endregion
}
