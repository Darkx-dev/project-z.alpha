import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await P.getPokemonsList({ limit, offset });
    if (response && response.results) {
      return response
    }
    return null;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return null;
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const pokemon = P.getPokemonByName(name);
    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
};

export const getPokemonAbilities = async (name: string) => {
  try {
    const abilities = await P.getAbilityByName(name);
    return abilities;
  } catch (error) {
    console.error('Error fetching abilities:', error);
    return null;
  }
};
