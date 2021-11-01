import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsResponse } from '../interfaces/post-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { 

  }

  getUsers() {
    return this.http.get<PostsResponse>('https://gorest.co.in/public/v1/posts');
  }
}
