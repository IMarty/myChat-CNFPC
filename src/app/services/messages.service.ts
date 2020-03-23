import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseUrl = "https://ajax-course.herokuapp.com"

  constructor(private http: HttpClient) { }

  getMessages(roomId) {
    return this.http.get(this.baseUrl + '/messages/' + roomId)
  }

}
