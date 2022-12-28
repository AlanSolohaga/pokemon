import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  public pokemones: Array<any> = [];

  constructor(
    private pokemonService: PokemonService
  ){
    //Obtiene los pokemones y los muestra en la tabla
    this.pokemonService.getPokemon().subscribe((resp:any) =>{
      this.pokemones = resp.results;
      console.log(this.pokemones);
    })

    
  }
}

//Función para obtener las Skill
function obtenerLaSkill(pokemonService: PokemonService) {
  pokemonService.getSkill("https://pokeapi.co/api/v2/pokemon/1/").subscribe((resp:any) =>{
      console.log(resp)
  })
}

