import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosenviadosProvider } from './../../providers/correosenviados/correosenviados';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';

/**
 * Generated class for the EnviadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {

  listaCorreos: Array<{nombre:any, direccion:any, asunto:any, mensaje:any, fecha:any}>;
  correoPage:any = CorreoPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public correosEnvProvider:CorreosenviadosProvider,
    public modalCtrl: ModalController
  ) {
    this.listaCorreos = correosEnvProvider.listaCorreos;
  }

  /*
  ionViewWillEnter() {
    console.log("etro en el gancho :v");
    
    this.storage.get('correosEnviados')
                .then((correosEnviados) => {
                  if(correosEnviados == null) {
                    this.listaCorreos = [];
                    this.correosEnvProvider.listaCorreos =[];
                  } else {
                    this.listaCorreos = correosEnviados;
                    this.correosEnvProvider.listaCorreos = this.listaCorreos;
                  }
                })
                .catch(error => {
                  console.log("Error al obtener los datos del storage correosEnviados");
                });
                
  }
  */

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
