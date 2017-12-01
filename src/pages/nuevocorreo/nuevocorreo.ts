import { ToastProvider } from './../../providers/toast/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CorreosenviadosProvider } from '../../providers/correosenviados/correosenviados';

/**
 * Generated class for the NuevocorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {

  accion: any = "";
  nombre:string;
  de: string;
  para: string;
  asunto: string;
  mensaje:string;
  correo:any = {
    nombre: '',
    direccion: '',
    asunto: '',
    mensaje: "",
    fecha: '', 
    imagen:""
  };

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController, 
      public toastProvider:ToastProvider, 
      public correosEnvProvider: CorreosenviadosProvider
    ) {

    this.accion = navParams.get('accion');
    this.correo = navParams.get('correo');

    this.nombre = this.correo.nombre;
    this.de = "gussware@email.com";

    if (this.accion == "Reply") {
      this.para = this.correo.direccion;
      this.asunto = "Re: " + this.correo.asunto;
    }

    if (this.accion == 'Foward') {
      this.asunto = "Re: " + this.correo.asunto;
    }

  }

  enviarCorreo() {

     let correo = {
      nombre: this.nombre,
      direccion: this.para,
      asunto: this.asunto,
      mensaje: this.mensaje, 
      fecha: new Date(),
      imagen: "j.gif"
    }
    
    this.correosEnvProvider.listaCorreos.push(correo);
    
    /*
    this.storage.set('correosEnviados', this.correosEnvProvider.listaCorreos)
                .then((val) => {
                  console.log(val);
                })
                .catch(error => {
                  console.log("error storage");
                });
                */
    this.viewCtrl.dismiss();
    this.toastProvider.crearToast('Correo enviado');
  }

  cerrar() {
    this.viewCtrl.dismiss();
  } 

}
