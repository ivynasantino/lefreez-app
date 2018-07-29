import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfolivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infolivro',
  templateUrl: 'infolivro.html',
})
export class InfolivroPage {

  titulo:String;
  autor:String;
  url:String;
  sinopse:String;
  preco:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = navParams.data.titulo;
    this.autor = navParams.data.autor;
    this.url = navParams.data.url;
    this.sinopse = navParams.data.sinopse;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfolivroPage');
  }


}
