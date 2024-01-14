import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
   <!--  </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2> 
    <h2>{{siteUrl}}</h2>
     >-->
    <input id="{{myId}}" type="text"value="vishwas"> // bind the propety 
    <input [id]="myId" type="text"value="vishwas"> // bind the propety
    <input [disabled]="isDisabled" id="{{myId}}" type="text"value="vishwas"> // disable the propety.
  `,
  styles:[]
})
export class TestComponent implements OnInit{

  public name = "Rashini";
  //public siteUrl= window.location.href;
  public myId="testId"; // create a new property
  public isDisabled=true;
  constructor(){}

  
  ngOnInit(){}

}

// we need property binding to limit the interpolation.it can onlty works with string values.sometimes there are boolean properties we should have to bind.
//<input [disabled]="false" id="{{myId}}" type="text"value="vishwas"> // disable the propety.