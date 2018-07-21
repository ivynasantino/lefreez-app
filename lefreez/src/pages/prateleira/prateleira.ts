import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-prateleira',
  templateUrl: 'prateleira.html',
})
export class PrateleiraPage {

  livros: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciaLivros();
  }

  iniciaLivros() {
    this.livros = [
      'Dom casmurro',
      'Laranja mecânica',
      'O alienista',
      'O bosque selvagem',
      'O pequeno príncipe'
    ];
  }

  getLivro(liv: any) {
    this.iniciaLivros();
    
    const val = liv.target.value;

    if (val && val.trim() != '') {
      this.livros = this.livros.filter(livro => {
        return (livro.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      })
    }

  }

}
