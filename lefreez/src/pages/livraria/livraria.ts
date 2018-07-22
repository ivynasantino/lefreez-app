import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-livraria',
  templateUrl: 'livraria.html',
})
export class LivrariaPage {

  livrariaLivros: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciaLivraria();
  }

  iniciaLivraria() {
    this.livrariaLivros = [
      'As crônicas de Nárnia',
      'Dom casmurro',
      'Gabriela cravo e canela',
      'Iracema',
      'Larânja mecânica',
      'Memórias póstumas de Brás Cubas',
      'Morte e vida Severina',
      'Mulheres de areia',
      'O alienista',
      'O bosque selvagem',
      'O colecionador',
      'O pequeno príncipe',
      'O príncipe',
      'O poder do hábito',
      'Poesia e rapadura',
      'Sítio do pica pau amarelo',
      'Vidas secas'

    ];
  }

  getLivroLivraria(liv: any) {
    this.iniciaLivraria();
    
    const val = liv.target.value;

    if (val && val.trim() != '') {
      this.livrariaLivros = this.livrariaLivros.filter(livroLivraria => {
        return (livroLivraria.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      })
    }

  }

}
