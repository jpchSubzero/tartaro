import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }

  getUsers() {
    return this.http.get<UsersResponse>('https://gorest.co.in/public/v1/users');
  }
}
