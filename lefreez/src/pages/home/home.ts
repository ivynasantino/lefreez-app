import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  livros: string[];

  constructor(public navCtrl: NavController) {
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
