/* eslint-disable @next/next/no-img-element */
import React from "react";
import Pokedex from "pokedex-promise-v2";

export default async function page({ params }: any) {
  const P = new Pokedex();
  const res = await P.getPokemonByName(params.id);
  const sprite = res.sprites;
  const ability = res.abilities;
  const types = res.types;

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div>
      <div className="sprite">
        <img
          className="mx-auto"
          src={sprite.front_default!}
          alt=""
          width={250}
        />
        <h1 className="text-center text-4xl" style={{ letterSpacing: "10px" }}>
          {params.id.toUpperCase()}
        </h1>
      </div>
      <div className="type p-2 flex justify-evenly flex-wrap">
        <h1 className="text-center text-xl text-green-400">TYPE : </h1>
        <div className="flex">
          {types.map((type, index) => (
            <div
              key={type.type.url}
              className="mx-2"
              style={{ letterSpacing: "2px" }}
            >
              {++index}. {capitalize(type.type.name)}
            </div>
          ))}
        </div>
      </div>
      <div className="abilities p-2">
        <h1 className="text-center text-xl text-green-400">ABILITIES</h1>
        {ability.map((ability, index) => (
          <div
            key={ability.ability.url}
            className=""
            style={{ letterSpacing: "2px" }}
          >
            {++index}. {capitalize(ability.ability.name)}
          </div>
        ))}
      </div>
    </div>
  );
}
