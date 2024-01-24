import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let color of colors">
      <h2>{{color}}</h2> <!-- each value of this will get rendered -->

    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  
  public colors=['red','blue','yellow']

  public color = "green";

  constructor() {}

  ngOnInit() {}

}
