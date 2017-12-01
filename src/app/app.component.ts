import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InboxPage } from '../pages/inbox/inbox';
import { EnviadosPage } from '../pages/enviados/enviados';
import { CorreoProvider } from '../providers/correo/correo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InboxPage;
  inboxPage:any = InboxPage;
  enviadosPage:any = EnviadosPage;
  totalCorreos:number = 0;

  @ViewChild('nav') menu : NavController;
 
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl:MenuController,
    public correoProvider: CorreoProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    /*
    setInterval(() => {
      this.totalCorreos = this.correoProvider.listaCorreos.length;
      console.log("si entra total de correos -> " +  this.totalCorreos);
    }, 3000);
    */
  }

  openPage(pagina) {
    this.menu.setRoot(pagina);
    this.menuCtrl.close();
  }
}

