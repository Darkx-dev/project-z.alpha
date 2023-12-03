"use client";
import React from "react";
import Pokedex from "pokedex-promise-v2";
import Card from "@/components/Card";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Pokemon {
  name: string;
  count: any;
}

export default function PokemonList() {
  const P = new Pokedex();
  const dataFetchedRef = useRef(false);
  const [actualData, setActualData] = useState<Pokemon[]>([] || null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([] || null);

  const fetchPokemonList = () => {
    P.getPokemonsList().then((res: any) => {
      setActualData(res);
      setPokemons(res.results);
    });

    P.getPokemonByName('bulbasaur').then(res => console.log(res))
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchPokemonList();
  });

  return (
    <div className="mx-2">
      Pokemons : {pokemons.length}
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}

