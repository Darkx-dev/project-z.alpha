"use client";
// pages/pokemonList.js
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { getPokemonList, getPokemonByName } from "@/services/pokedexService";

interface Pokemon {
  name: string;
}
export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // let pokemonMore: any = []
  const [pokemonMore, setpokemonMore] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 1292; // Set your desired limit
      const offset = 0; // Set your desired offset
      const response: any = await getPokemonList(limit, offset);
      setPokemons(response.results);
    };
    
    fetchPokemons();
  }, []);

  return (
    <div className="p-2">
      <h1>Results: {pokemons.length} / 1292</h1>
      {pokemons.length === 0 ? (
        <div>No Pokémon found</div>
      ) : (
        <div className="flex-col-reverse">
          {pokemons.map((pokemon, index) => (
            <Card name={pokemon.name} key={index} order={++index}/>
          ))}
        </div>
      )}
    </div>
  );
}
