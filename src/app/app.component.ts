import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = 'TabsPage';
  @ViewChild(Nav) navMaster: Nav;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openUsersTab(){
    this.navMaster.setRoot('TabsPage',{
      index: 0
    });
  }

  openAboutTab(){
    this.navMaster.setRoot('TabsPage',{
      index: 1
    });
  }

  openContactTab(){
    this.navMaster.setRoot('TabsPage',{
      index: 2
    });
  }
}
