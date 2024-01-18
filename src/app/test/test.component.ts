import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{ name }}
    </h2>
    <input [(ngModel)]="name" type="text">  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name: string = "Rashini"; 

  constructor() {}

  ngOnInit() {}

  logMessage(value: any) {
    console.log(value);
  }
}


