import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
  <h2 class="text-success">Rashini</h2>
  <h2 [class]="sucessClass">Rashini</h2> // assign success class

  <h2 class="text-special"[class]="sucessClass">Rashini</h2> // bind the class to the success property
  <h2 [class.text-danger]="hasError">Rashini</h2> //name of the class "text-danger" that we want to apply conditonally.evaluate the expression "hasError"(property that text -danger class apply to the element)true or false.

  <h2 [ngClass]="messageClasses">Rashini</h2>
  `,
  styles:[`
    .test-sucess{
      color:red;
    }
    .text-danger{
      color:green;
    }
    .text-special{
      font-style:italic;
    }
    `
  ]
})
export class TestComponent implements OnInit{

  public name = "Rashini";
  public sucessClass="text-success"; // call the success class and assign to textsuccess
  public hasError=true;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError, 
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }// object
  
  constructor(){}

  
  ngOnInit(){}

}
