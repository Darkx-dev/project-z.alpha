import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

export const fetchPokemonList = async () => {
  P.getPokemonsList().then(list => {
    console.log(list);
    return list;
  })
}