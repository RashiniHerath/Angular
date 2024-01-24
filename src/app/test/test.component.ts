import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-test',
  template: `
   <h2>{{"hello"+ name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
   
  `,
  styles: []
})
export class TestComponent implements OnInit {
fireEvent() {
throw new Error('Method not implemented.');
}
  
  @Input('parentData') public name: any; //sent the data from the parent component to child
  @Output() public childEvent=new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
fireEvent(){
    this.childEvent.emit("Hey Rashini");
  }

//by using event child components send data to the parent 