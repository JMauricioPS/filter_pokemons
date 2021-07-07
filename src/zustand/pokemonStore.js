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
      set({ pokemons: results });
    } catch (error) {
      //console.log(error);
      set({ hasError: true, errorMessage: "Se produjo un error", pokemons: [] });
    } finally {
      set({ isLoading: false });
    }
  },
  filterPokemons: (name) => {
   
      if (get().pokemons?.length) {
        const results = get().pokemons.filter((pokemon) => {
           return pokemon.name.includes(name.toLowerCase())
        });
        //console.log(results);
        set({ isSearch: true, text: name });
        //console.log(filteredPokemons);
        set({ filteredPokemons: results });
      }
    
  },
  deleteSearch: () => {
    set({ isSearch: false, filteredPokemons: [], text:"" });
  },
  search:(textSearch)=>{
    set({test: textSearch});
  },
  text:"",
}));

export default usePokemonStore;
