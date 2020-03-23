import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "https://ajax-course.herokuapp.com";
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.baseUrl + '/users')
  }

  signUp(usernameProvided, passwordProvided, imageProvided) {
    const data = {
      'username': usernameProvided,
      'password': passwordProvided,
      'image': imageProvided
    }
    return this.http.post(this.baseUrl + '/users', data);
  }

  logIn(usernameProvided, passwordProvided) {
    const data = {
      'username': usernameProvided,
      'password': passwordProvided,
    }
    return this.http.post(this.baseUrl + '/users', data);
  }

}
