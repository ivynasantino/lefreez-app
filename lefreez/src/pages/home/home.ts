import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  livros = [];

  constructor(public navCtrl: NavController) {
    this.iniciaLivros();
  }

  iniciaLivros() {
    this.livros = [
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

  selecionaLivro(liv) {
    var livro = this.getLivro(liv);
    return livro;
  }

}

