import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath:string = "https://api.themoviedb.org/3";
  private baseApiPassword:string = "?api_key=d40a643b9a0d45e646603e143f184456";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }


  getLastMovies(){

    return this.http.get(this.baseApiPath + "/movie/popular" + this.baseApiPassword);
  }
}
