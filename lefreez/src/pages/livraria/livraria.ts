import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfolivroPage } from '../infolivro/infolivro'


@IonicPage()
@Component({
  selector: 'page-livraria',
  templateUrl: 'livraria.html',
})
export class LivrariaPage {

  livrariaLivros:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciaLivraria();
  }

  iniciaLivraria() {
    this.livrariaLivros = [
      {titulo:"As crônicas de Nárnia",
       autor:"Clive Staples Lewis",
       sinopse:"Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.",
       url:"../../assets/imgs/narnia.jpeg",
       preco:"25.00"
      },
      {titulo:"Dom Casmurro",
       autor:"Machado de Assis",
       sinopse:"Bentinho e Capitu são criados juntos e se apaixonam na adolescência. Mas a mãe dele, por força de uma promessa, decide enviá-lo ao seminário para que se torne padre. Lá o garoto conhece Escobar, de quem fica amigo íntimo. Algum tempo depois, tanto um como outro deixam a vida eclesiástica e se casam.",
       url:"../../assets/imgs/casmurro.jpg",
       preco:"25.00"
      },
      {titulo:"Gabriela cravo e canela",
       autor:"Jorge Amado",
       sinopse:"Na década de 20 na então rica e pacata Ilhéus, ansiando progressos, com intensa vida noturna litorânea, entre bares e bordéis, desenrola-se o drama, que acaba por tornar-se uma explosão de folia e luz, cor, som e riso. A obra narra o caso de amor entre o árabe Nacib e a sertaneja Gabriela, com pano de fundo o período áureo do cacau na região de Ilhéus, descrevendo as alterações profundas da vida social da Bahia da década de 1920, que inclui a abertura do porto aos grandes navios, levando à ascensão do exportador carioca Mundinho Falcão e ao declínio dos coronéis, como Ramiro Bastos. Gabriela personifica as transformações de uma sociedade patriarcal, arcaica e autoritária, afetada pelos sopros de renovação cultural, política e econômica.",
       url:"../../assets/imgs/gabriela.jpg",
       preco:"25.00"
      },
      {titulo:"Iracema",
       autor:"José de Alencar",
       sinopse: "Em Iracema, Alencar criou uma explicação poética para as origens de sua terra natal, daí o subtítulo da obra - 'Lenda do Ceará'. A 'virgem dos lábios de mel' tornou-se símbolo do Ceará, e seu filho, Moacir, nascido de seus amores com o colonizador português Martim, representa o primeiro cearense, fruto da união das duas raças. A história é uma representação do que aconteceu com a América na época de colonização européia.",
       url:"../../assets/imgs/iracema.jpg",
       preco:"25.00"
      },
      {titulo:"Memórias póstumas de Brás Cubas",
       autor:"Machado de Asssis",
       sinopse:"Ao criar um narrador que resolve contar sua vida depois de morto, Machado de Assis muda radicalmente o panorama da literatura brasileira, além de expor de forma irônica os privilégios da elite da época.",
       url:"../../assets/imgs/bras.jpg",
       preco:"25.00"
      }
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

  getInfo(liv: any) {
    this.navCtrl.push(InfolivroPage, liv)
  }

}
