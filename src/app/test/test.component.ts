import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{ name }}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Rashini";

  constructor() {}

  ngOnInit() {}

  logMessage(value: any) {
    console.log(value);
  }
}


