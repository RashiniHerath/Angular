import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{name}}
    </h2>`,
})
export class TestComponent implements OnInit{

  public name = "Rashini";
  constructor(){}

  
  ngOnInit(){}

}
