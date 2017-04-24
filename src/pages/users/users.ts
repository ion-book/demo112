import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user-service';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {}

  ionViewDidLoad() {
    this.userService.getAll()
    .subscribe(data =>{
      this.users = data.results;
    }, error =>{
      console.error(error);
    });
  }

  goToUserDetailPage(user){
    this.navCtrl.push('UserDetailPage', {
      user: user
    });
  }

}
