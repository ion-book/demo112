import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-item-user',
  templateUrl: 'item-user.html'
})
export class ItemUserComponent {

  @Input() user: any  = {
    picture: {},
    name: {}
  };

  constructor() {}

}
