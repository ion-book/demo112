import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ItemUserComponent } from './components/item-user/item-user';
import { HighlightDirective } from './directives/highlight/highlight';
import { ReversePipe } from './pipes/reverse';

@NgModule({
  declarations: [
    ItemUserComponent,
    HighlightDirective,
    ReversePipe,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ItemUserComponent,
    HighlightDirective,
    ReversePipe,
  ]
})
export class SharedModule {}