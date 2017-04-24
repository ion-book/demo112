import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailPage } from './user-detail';

@NgModule({
  declarations: [
    UserDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDetailPage),
    SharedModule
  ],
  exports: [
    UserDetailPage
  ]
})
export class UserDetailModule {}
