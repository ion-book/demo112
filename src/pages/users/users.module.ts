import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { UsersPage } from './users';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    SharedModule
  ],
  exports: [
    UsersPage
  ]
})
export class UsersModule {}
