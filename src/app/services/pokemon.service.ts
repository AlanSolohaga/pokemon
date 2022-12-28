import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  _url  = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";

  constructor(
    private http: HttpClient
  ) { 
    console.log("service")
  }

  getPokemon(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');

    return this.http.get(this._url, {
      headers:header
    });
    
  }

  getSkill(_urlSkill: string){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');

    return this.http.get(_urlSkill,{
      headers:header
    });
  }
}
