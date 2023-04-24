import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pokemones:Array<any>= []

  constructor(
    private servicio: PokemonService
  ){

  }
  ngOnInit(): void {
    this.traerPokemon();
  }

  traerPokemon(){
    this.servicio.traePokemon().subscribe((res:any)=>{ 
      this.pokemones=res.results
      console.log(res.results)
    })
    
  }

  eliminarPokemon(){
    this.servicio.eliminarPokemon().subscribe((res:any)=>{

    })
  }
}

