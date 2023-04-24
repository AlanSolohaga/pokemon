import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  //"https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"

  constructor( 
    private http:HttpClient
  ) { 
  }
  traePokemon(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")

  }

  eliminarPokemon(){
    return this.http.delete("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
  }
}
