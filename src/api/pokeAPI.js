import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonData = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchPokemon = async (pokemon) => {
  try {
    const res = await axios.get(`${BASE_URL}${pokemon}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
