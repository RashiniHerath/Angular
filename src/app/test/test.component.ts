import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else elseBlock"> <!-- //conditionally render the particular HTML event -->
     Rashini
    </h2>
   <ng-template #elseBlock>
    <h2>
      Name is hidden
</h2>
</ng-template>

<!-- <div *ngIf="displayName; then the Block; else elseBlock" -->

<!-- <ng-template #thenBlock -->
  <!-- <h2> Rashini </h2> -->
<!-- <ng-template -->

<!-- <ng-template #elseBlock -->
  <!-- <h2> Hidden </h2> -->
<!-- <ng-template -->


  `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName=true;
  constructor() {}

  ngOnInit() {

  }

 
  }



