import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CorreoProvider } from './../../providers/correo/correo';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  correoPage:any = CorreoPage;
  listaCorreos: Array<{nombre:any, direccion:any, asunto:any, mensaje:any, fecha:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public correoProvider: CorreoProvider, public modalCtrl:ModalController) {
    this.listaCorreos = correoProvider.listaCorreos;
  }

  nuevoCorreo() {
    let modal = this.modalCtrl.create(NuevocorreoPage, {
      accion:'Nuevo Correo', 
      correo: {}
    });
    
    modal.present();
  }

  verCorreo(correo) {
    this.navCtrl.push(this.correoPage, correo);
  }
}
