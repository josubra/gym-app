import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Meu Treino',
      url: '/list',
      icon: 'bicycle'
    },
    {
      title: 'Planos',
      url: '/list',
      icon: 'albums'
    },
    {
      title: 'Contato',
      url: '/list',
      icon: 'call'
    },
    {
      title: 'Como chegar',
      url: '/list',
      icon: 'navigate'
    },
    {
      title: 'Sobre',
      url: '/list',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
