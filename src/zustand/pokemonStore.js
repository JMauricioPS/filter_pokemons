import create from "zustand";
import callApi from "../api";

const usePokemonStore = create((set, get) => ({
  pokemons: [],
  typePokemons: [],
  filteredPokemons: [],
  hasError: false,
  errorMessage: "",
  isLoading: false,
  isSearch: false,
  text: "",
  textType: "",
  getTypes: async () => {
    try {
      const typeResults = await callApi({
        url: "https://pokeapi.co/api/v2/type",
      });
      //console.log(typeResults.results);
      set({ typePokemons: typeResults.results });
    } catch (error) {
      console.log(error);
      set({ typePokemons: [] });
    }
  },
  getPokemons: async () => {
    const results = [];
    try {
      set({ isLoading: true, hasError: false, errorMessage: "" });
      const pokemonResults = await callApi({
        url: "https://pokeapi.co/api/v2/pokemon?limit=12",
      });
      for (const { url } of pokemonResults.results) {
        //console.log(url)
        const pokemon = await callApi({ url: url });
        results.push(pokemon);
      }
      //console.log(results);
      set({ pokemons: results });
    } catch (error) {
      //console.log(error);
      set({
        hasError: true,
        errorMessage: "Se produjo un error",
        pokemons: [],
      });
    } finally {
      set({ isLoading: false });
    }
  },
  filterPokemons: (name) => {
    if (get().pokemons?.length) {
      const results = get().pokemons.filter((pokemon) => {
        return pokemon.name.includes(name.toLowerCase());
      });
      //console.log(results);
      set({
        filteredPokemons: results,
        isSearch: true,
        text: name,
        textType: "",
      });
      //console.log(filteredPokemons);
    }
  },
  filterByType: (type) => {
    if (get().pokemons?.length) {
      // eslint-disable-next-line array-callback-return
      const results = get().pokemons.filter((pokemon) => {
        for (const iterator of pokemon.types) {
          //console.log(iterator.type.name);
          if (iterator.type.name === type.toLowerCase()) {
            return pokemon;
          }
        }
      });
      //console.log(results);
      set({
        filteredPokemons: results,
        isSearch: true,
        textType: type.toLowerCase(),
        text: "",
      });
      //console.log(filteredPokemons);
    }
  },
  deleteSearch: () => {
    set({ isSearch: false, filteredPokemons: [], text: "", textType: "" });
  },
}));

export default usePokemonStore;
