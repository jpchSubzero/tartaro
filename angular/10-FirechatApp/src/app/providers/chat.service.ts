import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map, delay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(
    private firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    this.itemsCollection = this.firestore.collection<Mensaje>('chats');
    this.auth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

      console.log('estado: ', user);
    });
  }

  cargarMensajes() {
    this.itemsCollection = this.firestore.collection<Mensaje>('chats', ref => ref
                                                                                .orderBy('fecha', 'desc')
                                                                                .limit(5)
                                                              );
    return this.itemsCollection.valueChanges()
    .pipe(
      map((response: Mensaje[]) => {
        console.log(response);
        this.chats = [];
        response.forEach(x => this.chats.unshift(x));
      })
    );
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      mensaje: texto,
      nombre: this.usuario.nombre,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje);
  }

  login(proveedor: string) {
    switch(proveedor) {
      case 'google': 
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        break;
      case 'twitter': 
        this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
        break;
    }
    console.log(proveedor);
  }

  logout() {
    this.auth.signOut();
    this.usuario = {};
  }
  
}
