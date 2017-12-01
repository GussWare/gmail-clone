import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
    
  }

  crearToast(mensaje:string) {
    let toast = this.toastCtrl.create({
        message:mensaje,
        duration:3000,
        position:'bottom'
    });

    toast.present(); 
    
  }

}
