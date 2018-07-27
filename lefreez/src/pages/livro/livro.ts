import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data);
    this.livro = navParams.data

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroPage');
    console.log(this.livro.titulo)
  }

}
