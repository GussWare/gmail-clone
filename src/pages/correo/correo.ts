import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


/**
 * Generated class for the CorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    this.correo = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  mostrarModal(tipoAccion:string) {

    let modal = this.modalController.create(NuevocorreoPage, {
      accion:tipoAccion, 
      correo: this.correo
    });
    
    modal.present();
  }



}
