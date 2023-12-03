/* eslint-disable @next/next/no-img-element */
// "use client";
import React from "react";
import Pokedex from 'pokedex-promise-v2';
import Card from "@/components/Card";

import { getPokemonByName, getPokemonAbilities } from '@/services/pokedexService';


export default async function PokemonList() {
  const P = new Pokedex();
  try {
    const response = await P.getPokemonsList();
    if (response && response.results) {
      return response.results.map(result => (
        <Card
          key={result.name}
          name={result.name}
        />
      ))
    }
    return null;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return null;
  }
}

export async function getStaticProps() {
  const pokemonName = 'pikachu'; // Replace with the desired Pokemon name
  const pokemon = await getPokemonByName(pokemonName);

  return {
    props: {
      pokemon,
    },
  };
}