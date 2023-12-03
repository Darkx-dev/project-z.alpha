"use client";
// pages/pokemonList.js
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { getPokemonList } from "@/services/pokedexService";

export default function PokemonList(name: string) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 10; // Set your desired limit
      const offset = 0; // Set your desired offset
      const response: any = await getPokemonList(limit, offset);

      setPokemons(response.results);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Results: {pokemons.length} / 10</h1>
      {pokemons.length === 0 ? (
        <div>No Pokémon found</div>
      ) : (
        <div>
          {pokemons.map((pokemon, index) => (
            <Card name={pokemon.name} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
