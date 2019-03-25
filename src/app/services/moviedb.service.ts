import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private URL_API:string = "https://api.themoviedb.org/3/movie";
  private API_KEY:string= "f8afdbec08f09f89ea268eef4f64b449";

  constructor(private http: Http) { }

  //retornar a lista de top rating movies
  getTopRatedMovies(){
  //retorna o resultado baseado na url de requisição
    return this.http.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}`)
  }
}

//http ionic v3

