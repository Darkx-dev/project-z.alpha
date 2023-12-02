/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";
import Card from "@/components/Card";
import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const res = fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    ).then((response) => response.json());
    res.then((data) => {
      setPokemon(data.results);
      setTotal(data.count);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {pokemon.map((pokemon: any) => {
        return (
          <Card key={pokemon.name} name={pokemon.name}/>
        );
      })}
    </div>
  )
}
