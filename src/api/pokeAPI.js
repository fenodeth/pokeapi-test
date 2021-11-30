import axios from "axios";

export const getPokemonData = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchPokemon = async (pokemon) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
