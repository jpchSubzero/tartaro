import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';


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
  userToken:string;

  constructor(private http: HttpClient) { 
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
      map(response => {
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
      map(response => {
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

    today.setSeconds(expiresIn);
    localStorage.setItem('expiresIn', today.getTime().toString());

  }

  private loadToken() {
    let savedToken:string = localStorage.getItem('idToken');
    if (savedToken) {
      this.userToken = savedToken;
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAutenticated():boolean {
    console.log("Token: " + this.userToken);
    const today = new Date();
    const expiresIn:number = Number(localStorage.getItem('expiresIn'));

    if (!this.userToken || this.userToken.length < 3) {
      return false;      
    } else {
      if (expiresIn > today.getTime()) {
        return true;      
      }
    }
    return false;      
  }
}
