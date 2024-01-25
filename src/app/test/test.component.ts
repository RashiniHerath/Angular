import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name="Codevolution"
  public messaage = "Welcome to Codevolution"
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  constructor() {}

  ngOnInit() {}
}


//pipes are allowes to transform data before displaying the view