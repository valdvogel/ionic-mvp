import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

  //variavel publica para HTML
  public nome_usuario:string = "José Almeida";
  public obj_feed = {
    titulo : "José Valdvogel",
    data: "14 de Novembro de 1984",
    descricao:"Desenvolvendo um app...",
    qtd_likes: "12",
    qtd_comments: "125",
    time_comment: "1h atrás"

  }
  //variavel para retornar lista
  public lista_videos = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private moovieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(x:number, y:number): void{
    
    //alert(x+y);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.moovieProvider.getLastMovies().subscribe(
      data=>{ 
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body);
        this.lista_videos = obj_retorno.results;
        console.log(obj_retorno);
      }, error => {
        console.log(error);
      }
    )
  }


}
