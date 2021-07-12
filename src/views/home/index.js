import { useEffect } from "react";

import usePokemonStore from "../../zustand/pokemonStore";
import shallow from "zustand/shallow";

import Loading from "../../components/Loading";
import BoxSearch from "./components/boxSearch";
import PokeType from "./components/pokeSelecType";
import PokemonList from "./components/pokeContainer";

export default function Home() {
  const {
    getPokemons,
    pokemons,
    getTypes,
    typePokemons,
    isLoading,
    filterPokemons,
    filteredPokemons,
    filterByType,
    isSearch,
    deleteSearch,
    text,
    textType,
  } = usePokemonStore(
    (state) => ({
      getPokemons: state.getPokemons,
      pokemons: state.pokemons,
      getTypes: state.getTypes,
      typePokemons: state.typePokemons,
      isLoading: state.isLoading,
      filterPokemons: state.filterPokemons,
      filterByType: state.filterByType,
      filteredPokemons: state.filteredPokemons,
      isSearch: state.isSearch,
      deleteSearch: state.deleteSearch,
      text: state.text,
      textType: state.textType,
    }),
    shallow
  );

  useEffect(() => {
    getTypes();
    getPokemons();
  }, [getPokemons, getTypes]);

  //console.log(pokemons);
  //console.log(typePokemons);
  return (
    <div className="container">
      <BoxSearch
        onSearch={filterPokemons}
        onDelete={deleteSearch}
        searching={text}
      />
      <PokeType
        types={typePokemons}
        filter={filterByType}
        onDelete={deleteSearch}
        activeFilter={textType}
      />
      {isLoading ? (
        <Loading title="loading results..." />
      ) : (
        <PokemonList pokemons={isSearch ? filteredPokemons : pokemons} />
      )}
    </div>
  );
}
