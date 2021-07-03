
import { useEffect } from "react";

import usePokemonStore from "../../zustand/pokemonStore";
import shallow from "zustand/shallow";

import BoxSearch from "./components/boxSearch";
import PokeType from "./components/pokeType";
import PokemonList from "./components/pokeContainer";

export default function Home(){

    const {
    getPokemons,
    pokemons}
    = usePokemonStore(state=>({
    getPokemons: state.getPokemons,
    pokemons: state.pokemons,
    }),shallow);

    useEffect(()=>{
        getPokemons();
    },[]);

    //console.log(pokemons);
    return (
        <div className="container">
            <BoxSearch/>
            <PokeType/>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}