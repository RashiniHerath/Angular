import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>
    <!-- <h2 [style.color]="'orange'">style binding</h2> -->
    <h2 [style.color]="hasError ? 'red': 'green'">style binding</h2> 
  `,
  styles:[]
})
export class TestComponent implements OnInit{

  public name = "Rashini";
  public hasError=false;
  public isSpecial=true;
  
  constructor(){}

  
  ngOnInit(){}

}
