import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { StorageService } from 'factor-utils';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/';
  private apiKey = 'AIzaSyDi4rQpcNtmBN9Nkq6ScaxyoZNSkXkA67k';
  userToken:string = '';

  constructor(
    private http: HttpClient,
    private storage:StorageService
  ) { 
    this.loadToken();
  
  }

  logOut() {
    localStorage.removeItem('idToken');
  }

  logIn(user:UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map((response:any) => {
        console.log('Token guardado');
        this.saveToken(response['idToken'], response['expiresIn']);
        return response;
      })
    );
  }
  
  registerNewUser(user:UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map((response:any) => {
        console.log('Token guardado');
        this.saveToken(response['idToken'], response['expiresIn']);
        return response;
      })
    );
  }

  private saveToken(idToken:string, expiresIn:number) {
    let today = new Date();
    
    this.userToken = idToken;
    localStorage.setItem('idToken', idToken);
    this.saveStorage('idToken', idToken);

    today.setSeconds(expiresIn);
    localStorage.setItem('expiresIn', today.getTime().toString());
    this.saveStorage('expiresIn', today.getTime().toString());
  }

  private loadToken() {
    let savedToken:string = localStorage.getItem('idToken') || '';
    let savedTokenEncriptado:string = this.readStorage('idToken');

    if (savedToken) {
      this.userToken = savedToken;
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAutenticated():boolean {
    //Para evitar que al darle retroceder al navegador muestre el home
    const savedToken:string = localStorage.getItem('idToken') || '';
    let savedTokenEncriptado:string = this.readStorage('idToken');
    if (!savedToken) {
      return false;
    }

    console.log("Token: " + this.userToken);
    console.log("Token Encriptado: " + savedTokenEncriptado);
    const today = new Date();
    const expiresIn:number = Number(localStorage.getItem('expiresIn'));
    const expiresInEncriptado:number = Number(localStorage.getItem('expiresIn'));

    if (!this.userToken || this.userToken.length < 3) {
      return false;      
    } else {
      if (expiresIn > today.getTime()) {
        return true;      
      }
    }
    return false;      
  }

  saveStorage(key: string, value:string):void {
    this.storage.set(key, value);
  }

  readStorage(key: string): string {
    return this.storage.get(key);
  }

  deleteStorage(key: string): void {
    this.storage.delete(key);
  }

}
