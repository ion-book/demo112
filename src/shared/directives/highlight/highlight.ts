import { Directive } from '@angular/core';


@Directive({
  selector: '[highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor() {
    console.log('Hello Highlight Directive');
  }

}
