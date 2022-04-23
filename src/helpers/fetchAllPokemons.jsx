import React from "react";
import { pokemonApi } from "../api/pokemonApi";

export const fetchAllPokemons = async () => {

  const res = await pokemonApi.get("/pokemon?limit=1500");
  const pokeList = res.data.results;

  return transformPokeintoPokemons(pokeList)
};



export const transformPokeintoPokemons = (pokeList) => {
    const pokemonArr = pokeList.map((poke)=>{

        const pokeArre = poke.url.split('/')
        const id = pokeArre[6]
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        
        return {
        id,
        name: poke.name,
        pic
    }
}
    
    )

  return pokemonArr
}





export default fetchAllPokemons;
