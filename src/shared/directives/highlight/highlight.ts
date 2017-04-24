import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor(
    public element: ElementRef
  ) {
    //This is only example for set backgroundColor is better with css
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
