import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<div> Inline template </div>',
  styles: ['div { color: red; }']
})
export class TestComponent {

}

//3 ways of specify a selector of component
// selector: '.app-test', (this we can use as a class name. one method to specify the selector)
// selector: '[app-test]', (this we can use as a attribute name. one method to represet the selector)