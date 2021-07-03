import create from "zustand";
import callApi from "../api";

const usePokemonStore = create((set,get)=>({
    pokemons: [],
    typePokemons:[],
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
    getPokemons: async ()=>{
        const results = [];
        try {
            const pokemonResults = await callApi({url: "https://pokeapi.co/api/v2/pokemon?limit=12"})
            for (const {url} of pokemonResults.results) {
                //console.log(url)
                const pokemon = await callApi({url:url});
                results.push(pokemon); 
            }
            //console.log(results);
            //console.log(pokemonResults.results);
            set({pokemons: results});
        } catch (error) {
            console.log(error);
            set({pokemons: []})
        }
    },
})) 

export default usePokemonStore;
