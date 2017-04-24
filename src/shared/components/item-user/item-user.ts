import { Component } from '@angular/core';

@Component({
  selector: 'item-user',
  templateUrl: 'item-user.html'
})
export class ItemUserComponent {

  text: string;

  constructor() {
    console.log('Hello ItemUser Component');
    this.text = 'Hello World';
  }

}
