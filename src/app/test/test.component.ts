import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      welcome {{ name }}
    </h2>
    <button (click)="onClick($event)"> Greet </button>
    <h2>{{ greeting }}</h2> <!-- Use interpolation and bind to the greeting property -->
   <!-- <button (click)="greeting='Welcome Rashini'"> Greet </button>   Button triggers the direct assignment of the 'greeting' property without using an event handler -->

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Rashini";
  public greeting = "";

  constructor() {}

  ngOnInit() {}

  // Event handler
  onClick(event: any) {
    console.log(event);
    this.greeting = "Welcome Rashini"; // Set the property value
  }
}



//sometimes we need all information event itself. for that we can simply  send in a parameter in the event handler
// ($event).it gives us all information about the DOM event that wass raised.