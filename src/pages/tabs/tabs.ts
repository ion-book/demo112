import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  selectedIndex: number = 0;

  tab1Root = 'UsersPage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';

  constructor(
    public navParams: NavParams
  ) {
    this.selectedIndex = this.navParams.get('index') || 0;
  }
}
