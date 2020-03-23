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
}
