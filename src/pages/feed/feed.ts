import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {

  //variavel publica para HTML
  public nome_usuario:string = "José Almeida";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(x:number, y:number): void{
    
    //alert(x+y);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaDoisNumeros(5,2);
  }


}
