import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(public http: HttpClient) {}

  async getPost() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
