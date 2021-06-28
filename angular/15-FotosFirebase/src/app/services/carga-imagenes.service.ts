import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES:string = 'images';

  constructor(private firestore:AngularFirestore, private storage: AngularFireStorage) { }

  private guardarFotos(imagen:{ nombre:string, url:string}) {
    this.firestore.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }

  cargarImagenes(archivos:FileItem[]) {
    for (const item of archivos) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const file = item.archivo;
      const filePath = `${ this.CARPETA_IMAGENES }/${ item.nombre }`;
      const fileRef = this.storage.ref( filePath );
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask.percentageChanges().subscribe(resp => item.progreso = Number(resp));

      uploadTask.snapshotChanges().pipe(
        finalize(
          () => fileRef.getDownloadURL().subscribe( url => {
            console.log('Imagen cargada con exito');
            item.url = url;
            item.estaSubiendo = false;
            this.guardarFotos({
              nombre: item.nombre,
              url: item.url
            });
          })
        )
      ).subscribe();
    }
  }  
}
