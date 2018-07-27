import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivroPage } from '../livro/livro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //private livros;

  constructor(public navCtrl: NavController) {
    //this.iniciaLivros();
  }

 // iniciaLivros() {
    livros:any = [
      { 'titulo': 'Dom casmurro',
        'texto': "Capitu traiu ou nao Bentinho? Bla bla..."
      },

      {'titulo': 'Laranja mecânica',
        'texto': "Bem legal, tenho que terminar de ler"
      },

      {'titulo': 'O alienista',
        'texto': 'é de Machado de Assis'
      },

      {'titulo': 'O bosque selvagem',
        'texto': 'livro escolhido para amostra'
      },

      {'titulo': 'O pequeno príncipe',
        'texto': 'Tambem tenho que terminar de ler'
      }
    ]

  getLivro(liv) {
    //this.iniciaLivros()
    console.log(liv.titulo)
    console.log(liv.texto)

    this.navCtrl.push(LivroPage, liv)


    //for (var _i = 0; _i < this.livros.length; _i++) {
      //console.log(this.livros.indexOf(_i));
    //}

    /*this.iniciaLivros();
    
    const val = liv.target.value;

    if (val && val.trim() != '') {
      this.livros = this.livros.filter(livro => {
        return (livro.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      })
    }*/

  }

  selecionaLivro(liv) {
    var livro = this.getLivro(liv);
    return livro;
  }

}

