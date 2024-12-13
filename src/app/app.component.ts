import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public apiService: ApiCallService, private http: HttpClient) {}

  ngOnInit() {
    console.log('CALLED dNG ON INIT', this.apiService.getPost().then(a => console.log(a)));
  }
  title = 'angular-touch';
  data = {
    name: 'Harshid',
    place: 'Malappuram',
    age: 27,
  };

  dataOFArray = [
    { name: 'harshid', age: 12, place: 'ard' },
    { name: 'dulqer', age: 15, place: 'calicut' },
    { name: 'mammuty', age: 20, place: 'ekm' },
    { name: 'mohanlal', age: 11, place: 'tvm' },
  ];
  public name = 'HARSHID BASIL';
  public Str = 0;
  increament() {
    this.Str = ++this.Str;
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res: any) => {
        console.log(res);
      });
    console.log(this.Str);
  }
  decreament() {
    if (this.Str === 0) return;
    this.Str = --this.Str;
  }
}
