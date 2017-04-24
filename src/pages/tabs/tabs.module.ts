import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    SharedModule
  ],
  exports: [
    TabsPage
  ]
})
export class TabsModule {}
