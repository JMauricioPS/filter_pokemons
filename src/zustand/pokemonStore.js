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
  //isLoading: false,
  /* getTypes: async ()=>{
        try {
            const typeResults = await callApi({url: "https://pokeapi.co/api/v2/pokemon?limit=200"})
            /* console.log(pokemonResults.results);*
            set({typesPokemons: typeResults.results});
        } catch (error) {
            console.log(error);
            set({typePokemons: []})
        }
    }, */
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
      //console.log(pokemonResults.results);
      set({ pokemons: results });
    } catch (error) {
      console.log(error);
      set({ hasError: true, errorMessage: error, pokemons: [] });
    } finally {
      set({ isLoading: false });
    }
  },
  filterPokemons: (name) => {
    if (name) {
      if (get().pokemons?.length) {
        const results = get().pokemons.filter((pokemon) => {
          if (pokemon.name.includes(name.toLowerCase())) {
            return pokemon;
          }
        });
        set({ isSearch: true });
        //setIsSearch(true);
        //console.log(filteredPokemons);
        set({ filteredPokemons: results });
        //setResults(filteredPokemons: results);
      }
    } else {
      console.log("no has ingresado texto");
      set({ isSearch: false });
      //setIsSearch(false);
    }
  },
  deleteSearch: () => {
    set({ isSearch: false });
  },
}));

export default usePokemonStore;
