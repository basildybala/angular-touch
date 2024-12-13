import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-touch';
  data={
    name:"Harshid",
    place:"Malappuram",
    age:27
  }

   dataOFArray=[
    {name:"harshid",age:12,place:"ard"},
    {name:"dulqer",age:15,place:"calicut"},
    {name:"mammuty",age:20,place:"ekm"},
    {name:"mohanlal",age:11,place:"tvm"},
  ]
  public name="HARSHID BASIL"
  public Str=0
  increament() {
    this.Str=++this.Str
    console.log(this.Str)
  }
  decreament(){
    if(this.Str ===0) return
    this.Str=-- this.Str
  }
}
