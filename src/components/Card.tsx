"use client"
import Pokedex from 'pokedex-promise-v2';
import React from "react";

interface Pokemon {
  order: number;
  name: string;
  abilities: string[];
}

export default function Card({ name, order }: any) {
  const P = new Pokedex();

  return (
    <div className="card card-side bg-base-100 shadow-xl my-2 mx-1">
      <div className="card-body">
        <h2 className="card-title">{name.toUpperCase()}</h2>
        <p>{order}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  );
}
